import dinosaures from '@/data/dinosaure.json';
import Image from 'next/image';
import DietTag from '@/components/DietTag';
import Link from 'next/link';

export default function DinoPage({ params }) {
  const dino = dinosaures.find(d => d.nom === params.nom_dino);

  if (!dino) return <p>Dinosaure non trouvé.</p>;

  return (
    <main className="p-8">
      <h1 className="bg-green-300 font-bold text-center p-4 text-lg">
        Le merveilleux monde des dinosaures
      </h1>

      <section className="text-center mt-6">
        <h2 className="text-xl font-semibold">{dino.nom_affiche}</h2>
        <Image
          src={`/${dino.image}`}
          alt={dino.nom}
          width={400}
          height={300}
          className="mx-auto my-4"
        />
        <p className="max-w-xl mx-auto text-sm leading-relaxed">{dino.description}</p>
        <div className="flex justify-center mt-4">
          <DietTag regime={dino.regime} />
        </div>
        <Link href="/" className="block mt-6 text-purple-700 underline">
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
}
