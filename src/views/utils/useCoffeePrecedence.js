import { useToast } from "vue-toast-notification";
import { ref, computed } from "vue";

export const useCoffeePrecedence = (key = "allCoffeesListPrecedence") => {
  const $toast = useToast();

  const rawPrecedence = ref(localStorage.getItem(key));
  const coffeesPrecedence = computed(() =>
    rawPrecedence.value ? JSON.parse(rawPrecedence.value) : []
  );

  const sortWithPrecedence = (coffees) => {
    if (!coffeesPrecedence) return coffees;

    return [...coffees].sort(
      (a, b) =>
        coffeesPrecedence.value.indexOf(a.id) -
        coffeesPrecedence.value.indexOf(b.id)
    );
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
