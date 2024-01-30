'use client'

import CommentForm from '@/src/components/comment-form';
import Reactions from '@/src/components/reactions';
import { Reaction } from '@/src/types';
import React, { useCallback, useEffect, useState } from 'react';

const Home = () => {
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Handle click on the page to add a reaction
  const handlePageClick = (event: { clientX: any; clientY: any; }) => {
    if (showModal) return;

    const { clientX, clientY } = event;
    setPosition({ top: clientY, left: clientX });
    setShowModal(true);
  };

  // Handle reaction submission
  const handleReactionSubmit = useCallback(() => {
    setReactions([...reactions, { comment, top: position.top, left: position.left }]);
    setShowModal(false);
    setComment('');
  }, [comment, position.left, position.top, reactions]);

  return (
    <main data-testid="main" onClick={handlePageClick} className="flex min-h-screen flex-col items-center justify-center p-24">

      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className="p-6">
          <h1 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Leave a comment anywhere!
          </h1>
        </div>
      </div>

      <Reactions reactions={reactions} />
      <CommentForm position={position} showModal={showModal} setShowModal={setShowModal} setComment={setComment} handleReactionSubmit={handleReactionSubmit} />

    </main>
  );
}

export default Home
