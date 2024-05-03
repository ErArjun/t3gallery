import Link from "next/link";

const mockUrls=[
  'https://utfs.io/f/faf993c9-fe87-4084-8879-2f45d3a88553-i5inxt.jpg',
  'https://utfs.io/f/1fbdcbb8-cfd0-479a-be66-6d645061bdd8-m023y9.jpg',
  'https://utfs.io/f/ab9a2c5e-ee1f-4ba3-83e6-1233520dc850-z1vbwp.jpg',
  'https://utfs.io/f/ab9a2c5e-ee1f-4ba3-83e6-1233520dc850-z1vbwp.jpg',
]

const mockImages=mockUrls.map((url,index)=>({
  id:index+1,
  url
}))
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
      {mockImages.map(image=>(
        <div key={image.id} className="w-48">
          <img src={image.url}/>
        </div>
      ))}
      </div>
    </main>
  );
}
