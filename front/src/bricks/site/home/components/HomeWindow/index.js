import React from 'react'

import * as S from './styles'
import * as B from '../../../../index'

const SLIDERS = [
  {
    title: 'Montant de l’emprunt',
    variant: 'primary-1'
  },
  {
    title: 'Durée',
    variant: 'accent-1'
  },
  {
    title: 'Mensualité',
    variant: 'accent-5'
  }
]

const BANKS = [
  {
    names: ['C', 'A', 'A'],
    rates: [1.2, 1.75, 1.75]
  },
  {
    names: ['B', 'D', 'D'],
    rates: [1.35, 1.8, 1.8]
  },
  {
    names: ['A', 'C', 'C'],
    rates: [1.5, 1.95, 1.95]
  },
  {
    names: ['D', 'B', 'B'],
    rates: [1.6, 2.0, 2.0]
  }
]

const HomeWindow = () => (
  <B.Card variant="neutral-1-20" format="line" zDepth={2}>
    <S.Window>
      <S.WindowHeader>
        <S.WindowBar>
          <S.Bar />
          <S.Bar />
          <S.Bar />
        </S.WindowBar>
      </S.WindowHeader>
      <S.WindowContent>
        <S.ViewSliderContainer>
          {SLIDERS.map(({ title, variant }, index) => (
            <S.Slider key={index} index={index}>
              <S.SliderTitle>{title}</S.SliderTitle>
              <S.SliderBar variant={variant}>
                <S.SliderBarContainerHandle>
                  <S.SliderHandle />
                </S.SliderBarContainerHandle>
                <S.SliderBarContainer>
                  <S.SliderFill />
                </S.SliderBarContainer>
              </S.SliderBar>
            </S.Slider>
          ))}
        </S.ViewSliderContainer>
        <S.ViewSliderContainer type="bank">
          <S.BanksList>
            {BANKS.map(({ names, rates }, index) => (
              <S.BankLine key={`line-${index}`}>
                <S.BankLineTitles>
                  {names.map((name, index) => (
                    <S.BankLineTitle key={`title-${index}`} index={index}>
                      Banque {name}
                    </S.BankLineTitle>
                  ))}
                </S.BankLineTitles>
                <S.BankLineRates>
                  {rates.map((rate, index) => (
                    <S.BankLineRate key={`rate-${index}`} index={index}>
                      {rate.toLocaleString('fr', { minimumFractionDigits: 2 })}%
                    </S.BankLineRate>
                  ))}
                </S.BankLineRates>
              </S.BankLine>
            ))}
          </S.BanksList>
        </S.ViewSliderContainer>
      </S.WindowContent>
    </S.Window>
  </B.Card>
)

export default HomeWindow
