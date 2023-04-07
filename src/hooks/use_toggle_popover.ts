import { useState } from 'react';

export const useTogglePopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handle_click = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

    const handle_close = () => setAnchorEl(null);

    return {
        handle_click,
        handle_close,
        anchorEl
    }
}
