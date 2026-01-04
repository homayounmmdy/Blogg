"use client"
import { useState } from 'react';
import Image from 'next/image';
import { CommentType } from '../config/StaticData';

interface CommentProps {
  comment: CommentType;
  depth?: number;
}

const Comment = ({ comment, depth = 0 }: CommentProps) => {
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  const [liked, setLiked] = useState(!!comment.liked);
  const [disliked, setDisliked] = useState(!!comment.disliked);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setLiked(true);
      if (disliked) {
        setDislikes((prev) => prev - 1);
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikes((prev) => prev - 1);
      setDisliked(false);
    } else {
      setDislikes((prev) => prev + 1);
      setDisliked(true);
      if (liked) {
        setLikes((prev) => prev - 1);
        setLiked(false);
      }
    }
  };

  const isTopLevel = depth === 0;
  const maxDepth = 2;

  const roleBadge = {
    user: 'text-gray-400',
    moderator: 'text-amber-400',
    admin: 'text-pink-400',
  }[comment.role];

  const handleReplyClick = () => {
    setShowReplyForm((prev) => !prev);
    if (showReplyForm) setReplyContent(''); // reset when closing
  };

  const handlePostReply = () => {
    // 🛑 No actual submission — just UI demo
    console.log('Reply content (not submitted):', replyContent);
    // In real app: call API, optimistic update, etc.
    setShowReplyForm(false);
    setReplyContent('');
  };

  return (
    <div
      className={`rounded-lg border border-teal-400/20 bg-gray-900/70 p-4 font-mono text-sm backdrop-blur-sm ${
        isTopLevel ? 'mb-6' : 'mb-4 ml-6 border-l-2 border-teal-400/30'
      }`}
    >
      <div className="flex gap-3">
        <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full border border-teal-400/30">
          <div className="absolute inset-0 animate-pulse bg-teal-400/5" />
          <Image
            src={comment.avatar}
            alt={`${comment.author} avatar`}
            width={32}
            height={32}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="font-bold text-teal-300">{comment.author}</span>
            <span className={`text-xs ${roleBadge}`}>• {comment.role}</span>
            <span className="text-xs text-gray-500">{comment.timestamp}</span>
          </div>

          <p className="mt-1 text-gray-300">{comment.content}</p>

          <div className="mt-2 flex items-center gap-3 text-xs">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 transition ${
                liked ? 'text-teal-300' : 'text-gray-500 hover:text-teal-400'
              }`}
              aria-label="Like"
            >
              <span>👍</span> <span>{likes}</span>
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center gap-1 transition ${
                disliked ? 'text-rose-400' : 'text-gray-500 hover:text-rose-300'
              }`}
              aria-label="Dislike"
            >
              <span>👎</span> <span>{dislikes}</span>
            </button>

            {isTopLevel && depth < maxDepth && (
              <button
                onClick={handleReplyClick}
                className="flex items-center gap-1 text-gray-500 transition hover:text-teal-300"
              >
                ↪ {showReplyForm ? 'Cancel' : 'Reply'}
              </button>
            )}
          </div>

          {/* Reply Form (UI Only) */}
          {showReplyForm && (
            <div className="mt-4 space-y-2 border-t border-teal-400/10 pt-3">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder={`Replying to ${comment.author}...`}
                className="w-full rounded border border-teal-400/20 bg-gray-800/60 p-2 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-teal-400/40"
                rows={2}
              />
              <div className="flex gap-2">
                <button
                  onClick={handlePostReply}
                  disabled={!replyContent.trim()}
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border rounded transition ${
                    replyContent.trim()
                      ? 'border-teal-400/60 text-teal-300 hover:bg-teal-400/10'
                      : 'border-gray-700 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  Post Reply
                </button>
                <button
                  onClick={() => {
                    setShowReplyForm(false);
                    setReplyContent('');
                  }}
                  className="rounded border border-gray-700 px-3 py-1 text-xs text-gray-400 transition hover:text-gray-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && depth < maxDepth && (
            <div className="mt-4 space-y-3 border-l-2 border-dashed border-teal-400/20 pl-4">
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;