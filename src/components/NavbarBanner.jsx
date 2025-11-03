import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function NavbarBanner() {
  const [show, setShow] = useState(true);
  const bannerRef = useRef(null);

  // hitung tinggi dinamis
  useLayoutEffect(() => {
    const root = document.documentElement;
    const nav = document.querySelector(".navbar");

    const applyHeights = () => {
      const navH = nav?.getBoundingClientRect().height || 64;
      root.style.setProperty("--nav-h", `${Math.round(navH)}px`);

      if (show && bannerRef.current) {
        const bH = bannerRef.current.getBoundingClientRect().height || 0;
        root.style.setProperty("--banner-h", `${Math.round(bH)}px`);
        document.body.style.paddingTop = `${Math.round(navH + bH)}px`;
      } else {
        root.style.setProperty("--banner-h", `0px`);
        document.body.style.paddingTop = `${Math.round(navH)}px`;
      }
    };

    applyHeights();
    const ro = new ResizeObserver(applyHeights);
    nav && ro.observe(nav);
    bannerRef.current && ro.observe(bannerRef.current);
    window.addEventListener("resize", applyHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", applyHeights);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div ref={bannerRef} className="promo-banner-fixed w-100">
      <div
        className="container d-flex align-items-center justify-content-center flex-wrap gap-2 banner-inner"
        style={{
          minHeight: "44px",
          padding: ".5rem 0.75rem",
          lineHeight: 1.6,
        }}
      >
        <span className="small text-dark text-center flex-grow-1">
          Selamat datang di{" "}
          <strong style={{ color: "#075985" }}>
            Intermedia Training Center (ITC)
          </strong>{" "}
          — program profesi komputer 1 tahun & pelatihan digital profesional.
        </span>

        <a
          href="/program"
          className="btn btn-sm text-white"
          style={{ backgroundColor: "#0284C7", border: "none" }}
        >
          Lihat Program
        </a>

        <button
          type="button"
          className="btn-close ms-2 banner-close"
          aria-label="Tutup pengumuman"
          onClick={() => setShow(false)}
        />
      </div>

      {/* CSS inline */}
      <style>{`
        .promo-banner-fixed {
          position: fixed;
          top: var(--nav-h);
          left: 0;
          right: 0;
          z-index: 1039;
          background-color: #E0F2FE;      /* soft blue */
          border-bottom: 3px solid #0284C7;/* primary blue */
        }

        /* Tombol X lebih besar klik-areanya */
        .banner-close {
          filter: invert(40%);
          transform: scale(1.1);
          width: 1.5rem;
          height: 1.5rem;
        }
        .banner-close:focus-visible {
          outline: 2px solid #075985;     /* blue-darker focus */
          outline-offset: 2px;
        }

        /* MOBILE layout lebih lega */
        @media (max-width: 576px) {
          .banner-inner {
            justify-content: space-between !important;
            text-align: left;
            gap: .5rem 0;
          }
          .banner-close {
            margin-left: auto;
            margin-right: .25rem;
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
