/*export function DiagonalTicker() {
  return (
    <div className="diagonal-ticker-wrapper">
      <div className="diagonal-ticker">
        <div className="diagonal-ticker__strip diagonal-ticker__strip--orange">
          <div className="diagonal-ticker__inner diagonal-ticker__inner--orange">
            <span className="diagonal-ticker__text">
              Logo Design ✕ Website Design ✕ Brand Design ✕ Logo Design ✕ Website Design ✕ Brand
              Design ✕
            </span>
            <span className="diagonal-ticker__text" aria-hidden="true">
              Logo Design ✕ Website Design ✕ Brand Design ✕ Logo Design ✕ Website Design ✕ Brand
              Design ✕
            </span>
          </div>
        </div>

        <div className="diagonal-ticker__strip diagonal-ticker__strip--black">
          <div className="diagonal-ticker__inner diagonal-ticker__inner--black">
            <span className="diagonal-ticker__text">
              Logo Design ✕ Website Design ✕ Brand Design ✕ Logo Design ✕ Website Design ✕ Brand
              Design ✕
            </span>
            <span className="diagonal-ticker__text" aria-hidden="true">
              Logo Design ✕ Website Design ✕ Brand Design ✕ Logo Design ✕ Website Design ✕ Brand
              Design ✕
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}*/
"use client";

export function DiagonalTicker() {
  return (
    <section className="relative h-[260px] w-full overflow-hidden bg-[#ECEFF1]">
      {/* Inner absolute container to prevent visual duplication */}
      <div className="absolute inset-0">

        {/* ORANGE STRIP (Top-left → Bottom-right) */}
        <div className="diagonal-ticker__strip diagonal-ticker__strip--orange">
          <div className="diagonal-ticker__inner diagonal-ticker__inner--orange">
            <span className="diagonal-ticker__text">
              Logo Design ✕ Website Design ✕ Brand Design ✕ Logo Design ✕ Website Design ✕ Brand
              Design ✕
            </span>
            <span className="diagonal-ticker__text" aria-hidden="true">
              Logo Design ✕ Website Design ✕ Brand Design ✕ Logo Design ✕ Website Design ✕ Brand
              Design ✕
            </span>
          </div>
        </div>

        {/* BLACK STRIP (Bottom-left → Top-right) */}
        <div className="diagonal-ticker__strip diagonal-ticker__strip--black">
          <div className="diagonal-ticker__inner diagonal-ticker__inner--black">
            <span className="diagonal-ticker__text">
              Logo Design ✕ Website Design ✕ Brand Design ✕ Logo Design ✕ Website Design ✕ Brand
              Design ✕
            </span>
            <span className="diagonal-ticker__text" aria-hidden="true">
              Logo Design ✕ Website Design ✕ Brand Design ✕ Logo Design ✕ Website Design ✕ Brand
              Design ✕
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}