import { BasicTranslate, Content, OrderGateway } from "./serializers/commons"


interface ImageSize {
    width: number
    height: number
    measure: string
}

interface PublicitySize {
    app?: ImageSize | null
    web?: ImageSize | null
}

interface Location {
    module: string
    section: string
    spot: string
    size: PublicitySize
}

export interface Advertisement {
    type_id: string
    category_id: string
    content: Content[]
    location: Location
    status?: boolean
}

export interface AdvertisementCategory {
    category: BasicTranslate[]
    status?: boolean
}

export interface AdvertisementOrder {
    user_id: string
    invoice_status?: boolean
    status?: boolean
}

export interface AdvertisementOrderItem {
    order_id: string
    spot_id: string
    cost?: number
    fees?: number
    taxes?: number
    discount?: number
    total?: number
}

export interface AdvertisementOrderPayment {
    order_id: string
    gateway: OrderGateway
    cost?: number
    fees?: number
    taxes?: number
    discount?: number
    total?: number
    comment?: string | null
    status?: boolean
}

export interface AdvertisementRegion {
    advertisement_id: string
    region: string
    amount: number
    cost: number
}

interface Country {
    long_name: string
    short_name: string
    currency: string
}

interface SpotLocation {
    state: string
    city: string
}

export interface AdvertisementSpot {
    region_id: string
    country: Country
    location?: SpotLocation
    cost: number
    available?: boolean
    status?: boolean
}

export interface AdvertisementType {
    type: BasicTranslate[]
    status?: boolean
}