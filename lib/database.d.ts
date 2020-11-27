import { ItemTemplate } from './item';
import { Locale } from './locale';
export interface Database {
    globals: Globals;
    templates: {
        items: {
            [id: string]: ItemTemplate;
        };
        profiles: {
            [edition: string]: any;
        };
        suits: {
            [id: string]: any;
        };
        handbook: any;
    };
    locales: {
        global: {
            [locale: string]: Locale;
        };
        menu: {
            [locale: string]: any;
        };
        languages: any;
    };
    traders: {
        [traderId: string]: any;
    };
    locations: any;
    hideout: {
        production: any;
        areas: any;
        scavcase: any;
        settings: any;
    };
}
export interface Globals {
    config: Config;
    time: number;
}
export interface Config {
    SkillProgressRate: number;
    WeaponSkillProgressRate: number;
    MaxBotsAliveOnMap: number;
    SavagePlayCooldown: number;
    TimeBeforeDeploy: number;
    TimeBeforeDeployLocal: number;
    BaseLoadTime: number;
    BaseUnloadTime: number;
    BaseCheckTime: number;
    RagFair: ConfigRagfair;
}
export interface ConfigRagfair {
    enabled: boolean;
    minUserLevel: number;
    communityTax: number;
    communityItemTax: number;
    communityRequirementTax: number;
}
