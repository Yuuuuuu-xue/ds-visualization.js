export interface Clickable {
    isActive: boolean,
    handleClick: () => void,
    setInactive: () => void,
    setActive: () => void
}