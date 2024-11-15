import { FC, MouseEventHandler } from 'react'

import IconButton from './IconButton'

type NavigationProp = {
  isDark: boolean
  showBackButton: boolean
  showCloseButton: boolean
  showTitle: boolean
  title?: string
  onBackButtonOnClick?: MouseEventHandler<HTMLButtonElement>
  onCloseButtonOnClick?: MouseEventHandler<HTMLButtonElement>
}

const NavigationBar: FC<NavigationProp> = ({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  onBackButtonOnClick = () => {},
  onCloseButtonOnClick = () => {}
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex navigation-title-wrapper">
        {/* 뒤로가기 버튼 */}
        {showBackButton && (
          <IconButton
            alt="back"
            iconPath={`${isDark ? '/back-light-icon' : '/back-icon'}.svg`}
            onClick={onBackButtonOnClick}
          />
        )}
        {/* 페이지 제목 */}
        {showTitle && (
          <h1
            className={`text-[24px] font-bold ${isDark ? 'text-white' : 'text-primary'} `}
          >
            {title}
          </h1>
        )}
      </div>
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="close"
          iconPath={`${isDark ? '/close-light-icon' : '/close-icon'}.svg`}
          onClick={onCloseButtonOnClick}
        />
      )}
    </div>
  )
}

export default NavigationBar
