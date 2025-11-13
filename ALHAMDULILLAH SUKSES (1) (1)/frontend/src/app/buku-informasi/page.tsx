import { Suspense } from "react";

const CanvaEmbed = () => {
  // Kode embed resmi dari Canva yang diberikan oleh user
  const canvaEmbedCode = (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "56.2500%",
        paddingBottom: 0,
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        marginTop: "1.6em",
        marginBottom: "0.9em",
        overflow: "hidden",
        borderRadius: "8px",
        willChange: "transform",
      }}
    >
      <iframe
        loading="lazy"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          border: "none",
          padding: 0,
          margin: 0,
        }}
        src="https://www.canva.com/design/DAGxdqBzurE/Bw5Teu1e15LXiYkR6Vtgjg/view?embed"
        allowFullScreen
        title="Buku Informasi SDGs"
      />
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-4">Buku Informasi</h1>
      <p className="mb-4 text-neutral-400">
        Dokumen ini berisi informasi penting mengenai program dan capaian SDGs di wilayah Kecamatan Wates.
      </p>
      <div className="flex-1 w-full">
        {canvaEmbedCode}
      </div>

    </div>
  );
};

export default function BukuInformasiPage() {
  return (
    <div className="flex flex-col h-screen p-8">
      <Suspense fallback={<div>Memuat Buku Informasi...</div>}>
        <CanvaEmbed />
      </Suspense>
    </div>
  );
}
