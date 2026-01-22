const MEDIA_CONFIG = {
            // IMAGES: Right-click > "Copy Image Address"
            home_photo:  "https://drive.google.com/file/d/1i2u_Pq7dTzvUEBR07wJoKBgMNEQY5Gk9/view?usp=drive_link",
            about_photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
            
            // VIDEO: Paste your YouTube Embed Link or Direct MP4 link
            // NOTE: For YouTube, use the "Embed" URL (e.g., https://www.youtube.com/embed/VIDEO_ID)
            capstone_video: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
            
            fallback_img: "https://via.placeholder.com/500x600/112229/00e5ff?text=MEDIA+NOT+FOUND"
        };

        window.addEventListener('DOMContentLoaded', () => {
            document.getElementById('main-photo').src = MEDIA_CONFIG.home_photo;
            document.getElementById('secondary-photo').src = MEDIA_CONFIG.about_photo;
            document.getElementById('video-player').src = MEDIA_CONFIG.capstone_video;

            // Error handling for images
            document.querySelectorAll('img').forEach(img => {
                img.onerror = () => img.src = MEDIA_CONFIG.fallback_img;
            });
        });

        
        // Reveal animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-element');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.hidden-trigger').forEach(el => observer.observe(el));


