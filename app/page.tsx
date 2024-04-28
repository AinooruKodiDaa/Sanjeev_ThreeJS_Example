import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const CubeScene = dynamic(() => import("@/components/explosions/cube-scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-black h-full">
      {/* <nav style={{padding:"0.25rem 1rem", position:"sticky", top:0, background:"red"}}>
      <ul><li>sds</li></ul>
    </nav>
    <iframe className="h-full"  width="100%" src="https://my.spline.design/untitled-2f9e601953927ab4de8703761346b3df/"></iframe> */}

      <CubeScene />
    </main>
  );
}
