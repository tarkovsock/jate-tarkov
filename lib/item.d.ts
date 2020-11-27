import { LocaleItemProps } from './locale';
export interface ItemTemplate {
    _id: string;
    _parent: string;
    _name: string;
    _type: string;
    _props: ItemProps;
}
export interface ItemProps extends LocaleItemProps {
    Weight: number;
    BackgroundColor: string;
    Width: number;
    Height: number;
    StackMaxSize: number;
    CreditsPrice: number;
    StackObjectsCount: number;
    LootExperience: number;
    ExamineExperience: number;
}
export interface InventoryItem {
    _id: string;
    _tpl: string;
    parentId: string;
    slotId: string;
    location: InventoryLocation;
    /**
     * Update values to be applied to item._props
     */
    upd: any;
}
export interface InventoryLocation {
    x: number;
    y: number;
    r: string;
    isSearched: boolean;
}
export declare enum WeaponFireType {
    Single = "single",
    Burst = "burst",
    Fullauto = "fullauto"
}
export declare enum ArmorMaterial {
    UHMWPE = 0,
    Aramid = 1,
    Combined = 2,
    Titan = 3,
    Aluminium = 4,
    ArmoredSteel = 5,
    Creramic = 6,
    Glass = 7
}
