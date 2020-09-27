export default {
  sortingHat: async () => {
    try {
      const response = await fetch("https://www.potterapi.com/v1/sortingHat");
      const house = await response.json();
      return house;
    } catch (e) {
      console.error(e.message);
      throw new Error("error while fetching sorting hat");
    }
  },
};
