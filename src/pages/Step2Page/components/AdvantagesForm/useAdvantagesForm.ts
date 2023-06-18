import { useState } from "react";
import { useAppSelector } from "../../../../store/store";

export const useAdvantagesForm = () => {
  const userStore = useAppSelector((state) => state.userStore);
  const [advantages, setAdvantages] = useState<string[]>(
    userStore.formStep2Values ? userStore.formStep2Values.advantages : []
  );

  function removeElementFromArrayByIndex<T>(array: T[], index: number): T[] {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (i !== index) {
        result.push(array[i]);
      }
    }
    return result;
  }

  const handleAddAdvantage = () =>
    setAdvantages((advantages) => [...advantages, ""]);

  const handleRemoveAdvantage = (index: number) => {
    setAdvantages((advantages) =>
      removeElementFromArrayByIndex(advantages, index)
    );
  };

  return { advantages, handleAddAdvantage, handleRemoveAdvantage };
};
