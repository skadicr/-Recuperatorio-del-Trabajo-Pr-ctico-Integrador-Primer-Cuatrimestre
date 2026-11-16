import AsyncStorage from '@react-native-async-storage/async-storage';

const CLAVE_TAREAS = 'tareas';

export const guardarTareas = async (tareas) => {
    try {
        await AsyncStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas));
    } catch (error) {
        console.log(error);
    }
};

export const obtenerTareas = async () => {
    try {
        const tareas = await AsyncStorage.getItem(CLAVE_TAREAS);
        return tareas ? JSON.parse(tareas) : [];
    } catch (error) {
        console.log(error);
        return [];
    }
};
