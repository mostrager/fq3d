import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Potree } from "potree-core";

export function PointCloudViewer({ url }: { url: string }) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const viewer = new Potree.Viewer(el.current);
    viewer.setEDLEnabled(true);
    viewer.loadPointCloud(url, "cloud", e => {
      viewer.scene.view.position.set(0,0,50);
      viewer.fitToScreen();
    });
    return () => viewer.dispose();
  }, [url]);

  return <div ref={el} className="w-full h-full"></div>;
}
