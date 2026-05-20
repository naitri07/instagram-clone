/* ── Instagram Clone — app.js ──────────────────────
   Features:
   - Like toggle (click heart icon)
   - Double-tap image to like with heart burst animation
   - Save/Bookmark toggle
   - Follow / Unfollow toggle
   - "Post" comment button (clears input)
   - Active nav-item highlight on click
──────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Like Button ─────────────────────────────── */
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleLike(btn));
  });

  function toggleLike(btn) {
    const icon = btn.querySelector('i');
    const liked = btn.classList.toggle('liked');

    if (liked) {
      icon.classList.replace('fa-regular', 'fa-solid');
      icon.style.color = '#ed4956';
      updateLikeCount(btn, +1);
    } else {
      icon.classList.replace('fa-solid', 'fa-regular');
      icon.style.color = '';
      updateLikeCount(btn, -1);
    }
  }

  function updateLikeCount(btn, delta) {
    const post = btn.closest('.post');
    const likesEl = post.querySelector('.post__likes strong');
    const num = parseInt(likesEl.textContent.replace(/,/g, ''), 10);
    likesEl.textContent = (num + delta).toLocaleString() + ' likes';
  }

  /* ── Double-tap image to like ────────────────── */
  document.querySelectorAll('.post__image').forEach(imgBox => {
    let lastTap = 0;

    imgBox.addEventListener('click', (e) => {
      const now = Date.now();
      if (now - lastTap < 350) {
        // Double tap detected
        const post = imgBox.closest('.post');
        const likeBtn = post.querySelector('.like-btn');

        // Only trigger burst + like if not already liked
        if (!likeBtn.classList.contains('liked')) {
          toggleLike(likeBtn);
        }

        // Always show heart burst
        showHeartBurst(imgBox);
      }
      lastTap = now;
    });
  });

  function showHeartBurst(container) {
    const burst = document.createElement('span');
    burst.textContent = '❤️';
    burst.className = 'heart-burst';
    container.appendChild(burst);
    burst.addEventListener('animationend', () => burst.remove());
  }

  /* ── Save / Bookmark ─────────────────────────── */
  document.querySelectorAll('.save-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      const saved = btn.classList.toggle('saved');

      if (saved) {
        icon.classList.replace('fa-regular', 'fa-solid');
      } else {
        icon.classList.replace('fa-solid', 'fa-regular');
      }
    });
  });

  /* ── Follow / Unfollow ───────────────────────── */
  document.querySelectorAll('.follow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isFollowing = btn.classList.toggle('following');
      btn.textContent = isFollowing ? 'Following' : 'Follow';
      btn.style.color  = isFollowing ? '#a8a8a8' : '';
    });
  });

  /* ── Post Comment ────────────────────────────── */
  document.querySelectorAll('.post__add-comment').forEach(block => {
    const input  = block.querySelector('.comment-input');
    const postBtn = block.querySelector('.btn-text');

    postBtn.addEventListener('click', () => {
      if (input.value.trim()) {
        input.value = '';
        input.placeholder = 'Comment posted!';
        setTimeout(() => { input.placeholder = 'Add a comment…'; }, 2000);
      }
    });

    // Allow Enter to post
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') postBtn.click();
    });
  });

  /* ── Active Nav Item ─────────────────────────── */
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

});