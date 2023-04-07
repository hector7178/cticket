import { Address, BasicTranslate, Content, OrderGateway, SocialMedia } from "./serializers/commons"
import { EventCost, EventDate, EventImage, EventInfo, EventSeatmapCost, EventSeatmapLocation, EventSeatmapSpotRow, EventServiceSchedule, EventServiceSettings, EventSettings, EventStat, EventSupplierData, EventUrl, EventVenueInfo } from "./serializers/event"

export interface Event {
    user_id: string
    supplier_id?: string | null
    category_id: string
    subcategory_id: string | null
    special_category_id?: string | null
    tags: EventTag[]
    content: Content[]
    info: EventInfo
    images?: EventImage | null
    social_media?: SocialMedia | null
    stats: EventStat
    settings: EventSettings
    status?: boolean
}

export interface EventCategory {
    category: BasicTranslate[]
    picture: string
    color: string
    status?: boolean
}

export interface EventDiscount {
    schedule_timetable_id?: string | null
    service_id?: string | null
    seatmap_id: string | null
    name: BasicTranslate[]
    coupon: string
    discount: string
    limit?: number
    status?: number
    expires_at?: Date | null
}

export interface EventOrder {
    user_id: string
    invoice_status?: boolean
    status?: boolean
}

export interface EventOrderItem {
    order_id: string
    seatmap_spot_id?: EventSeatmapSpot | null
    service_spot_id?: EventServiceSpot | null
    discount_id?: EventDiscount | null
    cost?: number
    fees?: number
    taxes?: number
    discount?: number
    total?: number
}

export interface EventOrderPayment {
    order_id: string
    gateway: OrderGateway
    cost?: number
    fees?: number
    taxes?: number
    discount?: number
    total?: number
    comment?: string | null
    status?: number
}

export interface EventSchedule {
    event_id: string
    venue_id: string
    type: EventDate
    status?: boolean
}

export interface EventScheduleTimetable {
    schedule_id: string
    start_at: Date
    end_at?: Date | null
    costs: EventCost
    urls: EventUrl
    sold_out?: boolean
    status?: boolean
}

export interface EventSeatmap {
    schedule_timetable_id: string
    section: string
    spots: EventSeatmapSpotRow[]
    costs: EventSeatmapCost
    status?: boolean
}

export interface EventSeatmapSpot {
    seatmap_id: string
    location: EventSeatmapLocation
    cost: number
    available: boolean
    status?: boolean
}

export interface EventService {
    schedule_timetable_id: string
    category_id: string
    name: string
    description: string
    suggestions: string
    schedule: EventServiceSchedule
    settings: EventServiceSettings
}

export interface EventServiceCategory {
    category: BasicTranslate[]
    status?: boolean
}

export interface EventServiceSpot {
    service_id: string
    spot: number
    cost: number
    disability?: boolean
    available?: boolean
    status?: boolean
}

export interface EventSpecialCategory {
    user_id: string
    category: Content
    header_img: string
    event_img: string
    color: string
    status?: boolean
}

export interface EventSubcategory {
    category_id: string
    subcategory: BasicTranslate[]
    status?: boolean
}

export interface EventSubsubcategory {
    category_id: string
    subcategory_id: string
    subsubcategory: BasicTranslate[]
    status?: boolean
}

export interface EventSupplier {
    user_id?: string | null
    name: string
    url: string
    color: string
    data?: EventSupplierData | null
    status?: boolean
}

export interface EventTag {
    tag: Content[]
    status?: boolean
}

export interface EventVenue {
    category_id: string
    name: string
    address: Address
    info?: EventVenueInfo | null
    status?: boolean
}

export interface EventVenueCategory {
    category: BasicTranslate[]
    status?: boolean
}