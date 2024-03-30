export const reducer = (state, action) => {
    let result = state;
    switch (action.type) {
        case "GET_DATA":
            return { ...state, data: action.payload };

        case "ADD_FAV":
            const prevFavs = JSON.parse(localStorage.getItem("favs")) || [];

            const filteredFavs = prevFavs.filter((item) => item != 0);

            const existingFav = filteredFavs.find(
                (fav) => fav.id === action.payload.id
            );
            result = state;
            if (existingFav) {
                alert("Doctor ya agregado");
            } else {
                alert("Doctor agregado con éxito.");
                const updatedFavs = [...filteredFavs, action.payload];
                localStorage.setItem("favs", JSON.stringify(updatedFavs));
                result = { ...state, favs: updatedFavs };
            }
            return result;

        case "ADD_PATIENT":
            const prevPatients = JSON.parse(localStorage.getItem("patients")) || [];

            const filteredPatients = prevPatients.filter((item) => item != 0);

            const updatedPatients = [...filteredPatients, action.payload];
            localStorage.setItem("patients", JSON.stringify(updatedPatients));

            return { ...state, patients: updatedPatients };

        case "CHANGE_THEME":
            return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    }
};
