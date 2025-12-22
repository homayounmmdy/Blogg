"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import StaticData from '@/app/config/StaticData';
import Link from 'next/link';

// Register Chart.js components
ChartJS.register(...registerables);

const PostStaticPage = () => {
  const metrics = StaticData.news.metrics;

  // Refs for canvas elements
  const deviceChartRef = useRef<HTMLCanvasElement>(null);
  const hourlyChartRef = useRef<HTMLCanvasElement>(null);

  // Store chart instances
  const deviceChartInstance = useRef<ChartJS | null>(null);
  const hourlyChartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    // Clean up any existing chart instances
    if (deviceChartInstance.current) {
      deviceChartInstance.current.destroy();
    }
    if (hourlyChartInstance.current) {
      hourlyChartInstance.current.destroy();
    }

    // Device Breakdown Pie Chart
    if (deviceChartRef.current) {
      const ctx1 = deviceChartRef.current.getContext('2d');
      if (ctx1) {
        deviceChartInstance.current = new ChartJS(ctx1, {
          type: 'doughnut',
          data: {
            labels: ['Desktop', 'Mobile', 'Tablet'],
            datasets: [
              {
                data: [
                  metrics.deviceBreakdown.desktop,
                  metrics.deviceBreakdown.mobile,
                  metrics.deviceBreakdown.tablet,
                ],
                backgroundColor: [
                  'rgba(0, 255, 255, 0.7)',   // teal
                  'rgba(0, 200, 200, 0.7)',
                  'rgba(0, 150, 150, 0.7)',
                ],
                borderColor: 'rgba(0, 255, 255, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: '#a0f0f0',
                  font: {
                    family: '"IBM Plex Mono", monospace',
                    size: 12,
                  },
                },
              },
            },
            cutout: '60%',
          },
        });
      }
    }

    // Hourly Views Line Chart
    if (hourlyChartRef.current) {
      const ctx2 = hourlyChartRef.current.getContext('2d');
      if (ctx2) {
        hourlyChartInstance.current = new ChartJS(ctx2, {
          type: 'line',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
            datasets: [
              {
                label: 'Views per Hour',
                data: metrics.hourlyViews,
                borderColor: 'rgba(0, 255, 255, 1)',
                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                tension: 0.3,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                ticks: { color: '#60c0c0' },
                grid: { color: 'rgba(0, 255, 255, 0.05)' },
              },
              y: {
                ticks: { color: '#60c0c0' },
                grid: { color: 'rgba(0, 255, 255, 0.05)' },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: '#a0f0f0',
                  font: {
                    family: '"IBM Plex Mono", monospace',
                    size: 12,
                  },
                },
              },
            },
          },
        });
      }
    }

    // Cleanup function to destroy charts when component unmounts
    return () => {
      if (deviceChartInstance.current) {
        deviceChartInstance.current.destroy();
      }
      if (hourlyChartInstance.current) {
        hourlyChartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to ensure charts are only created once

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200">
      {/* CRT Scanlines Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

      {/* Circuit Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <main className="relative z-10 px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <h1 className="mb-8 mt-4 text-center font-mono text-2xl font-bold uppercase tracking-wide text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)] sm:text-3xl">
            ANALYTICS
          </h1>

          {/* Summary Stats */}
          <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {[
              { label: 'VIEWS', value: metrics.views.toLocaleString() },
              { label: 'LIKES', value: metrics.likes },
              { label: 'SHARES', value: metrics.shares },
              { label: 'READ TIME', value: `${Math.round(metrics.avgReadTime / 60)}m` },
              { label: 'COMPLETION', value: `${metrics.completionRate}%` },
              { label: 'STATUS', value: 'ARCHIVED' },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded border border-teal-400/20 bg-gray-900/70 p-3 text-center backdrop-blur-sm"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-teal-400">
                  {stat.label}
                </div>
                <div className="mt-1 font-mono text-lg font-bold text-teal-300">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Device Breakdown */}
            <div className="rounded-lg border border-teal-400/20 bg-gray-900/70 p-4 backdrop-blur-sm">
              <h3 className="mb-3 font-mono text-sm uppercase tracking-wide text-teal-300">
                DEVICE BREAKDOWN
              </h3>
              <div className="h-64">
                <canvas ref={deviceChartRef} />
              </div>
            </div>

            {/* Hourly Views */}
            <div className="rounded-lg border border-teal-400/20 bg-gray-900/70 p-4 backdrop-blur-sm">
              <h3 className="mb-3 font-mono text-sm uppercase tracking-wide text-teal-300">
                VIEWS (LAST 24H)
              </h3>
              <div className="h-64">
                <canvas ref={hourlyChartRef} />
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 rounded border border-teal-400/20 bg-gray-900/70 p-4 text-center">
            <p className="font-mono text-[12px] italic text-gray-400">
              ⚠️ All data is static and for demonstration only.  
              This template does not collect real analytics.
            </p>
          </div>

          {/* Back to Post */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-teal-400 bg-gray-900 px-6 py-2 font-mono text-[13px] font-bold uppercase tracking-wider text-teal-300 transition-all duration-300 hover:border-teal-300 hover:text-teal-200"
            >
              <div className="absolute inset-0 bg-teal-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
                ← RETURN TO TERMINAL
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostStaticPage;