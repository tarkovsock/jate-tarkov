import { Character } from './character';
export interface Profile {
    info: ProfileInfo;
    characters?: {
        pmc: Character;
        scav: Character;
    };
    suits?: string[];
    weaponbuilds?: any;
    dialogues?: any;
}
export interface ProfileInfo {
    id: string;
    /**
     * Username
     */
    email: string;
    /**
     * Credential
     */
    password: string;
    /**
     * Game Edition
     */
    edition: string;
}
