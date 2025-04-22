export default function DietTag({ regime }) {
    const classes = {
      Herbivore: "bg-green-200 border px-4 py-2 font-semibold",
      Carnivore: "bg-gray-100 border px-4 py-2 font-semibold",
      Piscivore: "bg-blue-100 border px-4 py-2 font-semibold"
    };
  
    return (
      <button className={classes[regime]}>
        {regime}
      </button>
    );
  }
  