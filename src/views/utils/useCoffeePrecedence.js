import { useToast } from "vue-toast-notification";

export const useCoffeePrecedence = (key) => {
  const $toast = useToast();

  const rawPrecedence = localStorage.getItem(key);
  const coffeesPrecedence = rawPrecedence ? JSON.parse(rawPrecedence) : [];

  const sortWithPrecedence = (coffees) => {
    if (!coffeesPrecedence) return coffees;

    coffees.sort(
      (a, b) =>
        coffeesPrecedence.indexOf(a.id) - coffeesPrecedence.indexOf(b.id)
    );
    return coffees;
  };

  const savePrecedence = (sortedCoffees, showToast = true) => {
    localStorage.setItem(
      key,
      JSON.stringify(sortedCoffees.map(({ id }) => id))
    );
    if (showToast) {
      $toast.info("Reordered!", {
        position: "bottom-left",
        duration: 2000,
      });
    }
  };

  return {
    coffeesPrecedence,
    sortWithPrecedence,
    savePrecedence,
  };
};
