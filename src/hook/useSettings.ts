import { useContext } from "react";
import { SettingsContext } from '../context/SettingProvider';

const useSettings = () => useContext (SettingsContext);

export default useSettings;