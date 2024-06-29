import { useDragControls } from "framer-motion";
import useData from "./useData";

interface platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<platform>('platforms/list/parents');

export default usePlatforms;