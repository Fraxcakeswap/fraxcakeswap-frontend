import { ContextApi } from '@pancakeswap/localization'
import {
  DropdownMenuItems,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  PoolIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, chainId) =>
  [
    {
      label: t('Swap'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
    },
    {
      label: t('Liquidity'),
      icon: PoolIcon,
      fillIcon: PoolIcon,
      href: '/liquidity',
      showItemsOnMobile: false,
    },
    {
      label: t('Farms'),
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      href: '/farms',
      showItemsOnMobile: false,
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
