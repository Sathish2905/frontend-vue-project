
// Common ENUM Types
export type OrderStatus = 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
export type PaymentStatus = 'Pending' | 'Completed' | 'Failed';
export type PaymentMethod = 'Credit Card' | 'UPI' | 'Bank Transfer';
export type AddressType = 'Billing' | 'Shipping';
export type ShippingStatus = 'Preparing' | 'Shipped' | 'In Transit' | 'Delivered';

// Users Table
export interface User {
    user_id: number;
    email: string;
    password_hash: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    created_at: Date;
    updated_at: Date;
}

// Roles Table
export interface Role {
    role_id: number;
    role_name: string;
}

// UserRoles Table
export interface UserRole {
    user_id: number;
    role_id: number;
}

// Categories Table
export interface Category {
    category_id: number;
    category_name: string;
    parent_category_id?: number;
}

// Products Table
export interface Product {
    product_id: number;
    category_id?: number;
    name: string;
    description?: string;
    price: number;
    sku: string;
    stock: number;
    created_at: Date;
    updated_at: Date;
}

// ProductImages Table
export interface ProductImage {
    image_id: number;
    product_id: number;
    image_url: string;
    alt_text?: string;
}

// Inventory Table
export interface Inventory {
    inventory_id: number;
    product_id: number;
    quantity: number;
    location?: string;
    last_updated: Date;
}

// Carts Table
export interface Cart {
    cart_id: number;
    user_id: number;
    created_at: Date;
    updated_at: Date;
}

// CartItems Table
export interface CartItem {
    cart_item_id: number;
    cart_id: number;
    product_id: number;
    quantity: number;
}

// Orders Table
export interface Order {
    order_id: number;
    user_id: number;
    total: number;
    status: OrderStatus;
    created_at: Date;
    updated_at: Date;
}

// OrderItems Table
export interface OrderItem {
    order_item_id: number;
    order_id: number;
    product_id?: number;
    quantity: number;
    price: number;
}

// Payments Table
export interface Payment {
    payment_id: number;
    order_id: number;
    payment_method: PaymentMethod;
    amount: number;
    status: PaymentStatus;
    payment_date: Date;
}

// Addresses Table
export interface Address {
    address_id: number;
    user_id: number;
    address_type: AddressType;
    street: string;
    city: string;
    state?: string;
    postal_code?: string;
    country: string;
    created_at: Date;
}

// Shipping Table
export interface Shipping {
    shipping_id: number;
    order_id: number;
    carrier: string;
    tracking_number?: string;
    status: ShippingStatus;
    shipped_date?: Date;
    estimated_delivery_date?: Date;
}

// Reviews Table
export interface Review {
    review_id: number;
    product_id: number;
    user_id: number;
    rating: number;
    review_text?: string;
    created_at: Date;
}

// UnitTypes Table
export interface UnitType {
    unit_type_id: number;
    type_name: string;
}

// Units Table
export interface Unit {
    unit_id: number;
    unit_type_id: number;
    unit_name: string;
    abbreviation: string;
    conversion_to_base: number;
}

// ProductUnits Table
export interface ProductUnit {
    product_unit_id: number;
    product_id: number;
    unit_id?: number;
    quantity: number;
}

// Sizes Table
export interface Size {
    size_id: number;
    size_name: string;
}

// ProductVariants Table
export interface ProductVariant {
    variant_id: number;
    product_id: number;
    size_id?: number;
    color?: string;
    sku: string;
    price: number;
    stock: number;
    created_at: Date;
    updated_at: Date;
}

// SiteProperties Table
export interface SiteProperty {
    property_id: number;
    property_key: string;
    property_value?: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

// AuditLog Table
export interface AuditLog {
    log_id: number;
    property_key: string;
    old_value?: string;
    new_value?: string;
    changed_by: string;
    changed_at: Date;
}
