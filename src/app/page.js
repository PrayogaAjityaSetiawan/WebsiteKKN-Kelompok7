"use client";
import { FocusCards } from "@/components/ui/focus-cards";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextScroll } from "@/components/ui/text-scroll";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative px-4 md:px-20">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      `,
      backgroundSize: "20px 20px,20px 20px, 100% 100%, 100% 100%",
    }}
  />
  <div className=" h-[100vh] flex flex-col gap-5 justify-center md:jus md:flex-row items-center  md:pt-0">

    <div className="md:w-1/2 flex flex-col justify-center gap-2 items-center z-10">
      <h1 className="text-[40px] md:text-[60px] leading-none font-semibold uppercase">Keluarga Baru, Cerita Tak Terlupakan</h1>
      <p className="text-gray-500">KKN Kelompok 7 bukan hanya tentang pengabdian, tapi juga tentang kebersamaan, tawa, dan kisah yang mengikat hati kami sebagai sebuah keluarga.</p>
    </div>
    <div className="md:w-1/2 z-20"> 
        <img className="w-full h-full object-cover md:rounded-lg" src="./bg1.jpg" alt=""/>
    </div>
  </div>
  <div>

  <TextScroll 
  className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem]"
  text="KKN Sumberjaya 2025" 
  default_velocity={5}/>
  </div>
  <div className="my-10 md:mx-20">
    <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center mb-5">
      <div className="flex flex-col  gap-2 md:w-1/2 z-10">
        <span className="text-gray-500 font-semibold">Our Family</span>
        <h1 className="text-[35px] md:text-[40px] leading-none font-bold">Together as One Heart</h1>
      </div>
      <div className="md:w-1/2 z-10">
        <span className="text-gray-500 font-semibold">Kebersamaan kami bukan hanya dalam kegiatan, tapi juga dalam ikatan kekeluargaan yang tumbuh dari setiap cerita dan pengalaman. </span>
      </div>
    </div>

    <FocusCards className
    cards={[
      {title: "Rahmad Maulana", src: "./rahmad.jpg"},
      {title: "Prayoga Ajitya Setiawan", src: "./aku.jpg"},
      {title: "Dzaky Rakha Meilano", src: "./dzaky.jpg"},
      {title: "Sabila Zulfa", src: "./sabila.jpg"},
      {title: "Syifa Salsabila Farmin", src: "./syifa.jpg"},
      {title: "Danu Dyeka Putra", src: "./danu.jpg"},
      {title: "Reza Andira", src: "./reza.jpg"},
      {title: "Anneira Audrey", src: "./audrey.jpg"},
      {title: "Dhias Prastowo", src: "./dias.jpg"},
      {title: "Alista Nur Aprilia", src: "./alista.jpg"},
    ]} />

    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between md:items-center mb-5">
      <div className="flex flex-col md:gap-2 md:w-1/2 z-10">
        <span className="text-gray-500 font-semibold">Suara Hati</span>
        <h1 className="text-[35px] md:text-[40px] leading-none font-bold">Pesan dan Kesan ❤️</h1>
      </div>
      <div className="md:w-1/2 z-10">
        <span className="text-gray-500 font-semibold">Curahan kata dari hati kita, yang selalu rindu soal kenangan dan kebersamann yang telah kita buat</span>
      </div>
    </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

  </div>
</div>
    
  );
}


const testimonials = [
  {
    quote:
      "kesan dan pesan saya KKN di Pandeglang memberi pengalaman berharga tentang kebersamaan dan kepedulian.bersyukur satu posko dengan teman-teman yang kompak dan luar biasa.setiap kegiatan menjadi kenangan indah tak terlupakan.saya belajar arti gotong royong dan adaptasi di lingkungan baru.terima kasih kepada warga Desa Sumber Jaya atas sambutan hangatnya.",
    name: "Syifa Salsabila Farmin",
    title: "Konsumi",
  },
  {
    quote:
      "Grup kita memang paling pecah! Kesan saya selama ini, seru banget bisa kerja, belajar bareng kalian. Setiap anggota memiliki keunikan dan kontribusi baik dari segi ide maupun semangat pantang menyerah. Sampai jumpa di lain kesempatan. Semoga pertemanan ini ga putus di sini ya. Jangan sampai putus komunikasi ya! Mari kita jaga silaturahmi ini di luar urusan akademis.",
    name: "Rahmad Maulana",
    title: "Ketua",
  },
  {
    quote:
      "aneh aneh aneh",
    name: "Alista Nur Aprilia",
    title: "PDD",
  },
  {
    quote:
      "Haiii, tengkyu ya semua atas 24 hari kebersamaannya. Banyak moment dan pengalaman baru yang gw dapetin selama kkn, pasti ga akan gw lupain. Senang sekali bisa kenal kalian semua, sehat dan sukses terus ya buat kedepannya. Semoga silaturahmi kita tidak terputus, terima kasih orang-orang baik🫶",
    name: "Sabila Zulfa",
    title: "Acara",
  },
  {
    quote:
      "Makasih buat 3 minggu nya, kasihan mamad terbuli #JusticeForMamad",
    name: "Anneira Audrey",
    title: "Bendahara",
  },
  {
    quote:
      "Sebenernya gada kesan pesan dri gua",
    name: "Reza Andira",
    title: "Humas",
  },
  {
    quote:
      "Terima kasih untuk kalian semua, senang sekali bisa kenal kalian semua, semoga kita selalu ingat ya 🙏",
    name: "Prayoga Ajitya Setiawan",
    title: "Sekretaris",
  },
  
];

