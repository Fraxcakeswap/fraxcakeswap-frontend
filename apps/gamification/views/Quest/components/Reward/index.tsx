import { useTranslation } from '@pancakeswap/localization'
import { Box, Button, InfoIcon, Text } from '@pancakeswap/uikit'
import { styled } from 'styled-components'
import { Countdown } from 'views/Quest/components/Reward/Countdown'
import { RemainMessage } from 'views/Quest/components/Reward/RemainMessage'
import { RewardAmount } from 'views/Quest/components/Reward/RewardAmount'
import { SuccessMessage } from 'views/Quest/components/Reward/SuccessMessage'
import { TotalRewards } from 'views/Quest/components/Reward/TotalRewards'

const RewardContainer = styled(Box)`
  max-width: 368px;
  width: 100%;
  height: 100vh;
  padding: 40px 40px 0 40px;
  border-left: 1px solid ${({ theme }) => theme.colors.input};
`

const StyledButton = styled(Button)`
  width: 100%;
  margin: 16px 0;
  border-radius: 24px;
`

export const Reward = () => {
  const { t } = useTranslation()

  return (
    <RewardContainer>
      <Text fontSize={['24px']} bold mb="16px">
        {t('Reward')}
      </Text>
      <RewardAmount />
      <Countdown />
      <TotalRewards />
      <StyledButton>{t('Claim the reward')}</StyledButton>
      <StyledButton disabled endIcon={<InfoIcon color="textDisabled" />}>
        {t('Unavailable')}
      </StyledButton>
      <RemainMessage />
      <SuccessMessage />
    </RewardContainer>
  )
}
