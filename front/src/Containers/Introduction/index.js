import React, { Component } from 'react'
import { omit } from 'lodash'
import Summary from '../Summary'
import Sentence from '../Sentence'
import Graph from '../Graph'
import Divider from '../Divider'
import Input from '../Input'
import * as B from '../../bricks'
import * as S from './styles'

class Introduction extends Component {
  state = {
    initialized: false,
    income: 2000,
    contribution: 30000,
    zipcode: '75002',
    incomeKind: 'net',
    period: 'monthly',
    loading: false,
    results: {}
  }
  salary = () => {
    const { income, incomeKind, period } = this.state
    let salary = Number(income)
    if (incomeKind === 'brut') salary *= 0.78
    if (period === 'monthly') salary *= 12
    return salary
  }
  initialize = async () => {
    this.setState({ loading: true })
    const { contribution, zipcode } = this.state
    const income = this.salary()
    const promise = await fetch('http://10.10.0.95:3000/initialize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        income,
        contribution,
        zipcode: zipcode.toString()
      })
    })
    const results = await promise.json()
    this.setState(prevState => ({
      ...prevState,
      initialized: true,
      loading: false,
      results
    }))
  }
  getResults = async () => {
    const promise = await fetch('http://10.10.0.95:3000/sharpen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(omit(this.state.results, ['facts']))
    })
    const results = await promise.json()
    this.setState(prevState => ({
      ...prevState,
      initialized: true,
      loading: false,
      results
    }))
  }
  handleSelect = key => ({ value }) =>
    this.setState({ initialized: false, [key]: value })

  handleChangeNumberField = key => value =>
    this.setState({ initialized: false, [key]: value })

  handleChangeContribution = e =>
    this.setState({ contribution: e.target.value })

  handleSubmit = () => {
    this.initialize()
  }

  handleSharpen = () => {
    this.getResults()
  }

  handleChangeInput = key => value =>
    this.setState(prevState => ({
      ...prevState,
      results: { ...prevState.results, [key]: value }
    }))

  sentenceProps = () => {
    const {
      income,
      zipcode,
      incomeKind,
      period,
      contribution,
      initialized
    } = this.state
    return {
      onChangeLocation: this.handleChangeNumberField('zipcode'),
      zipcode,
      income,
      onChangeIncome: this.handleChangeNumberField('income'),
      incomeKind,
      onChangeIncomeKind: this.handleSelect('incomeKind'),
      period,
      onChangePeriod: this.handleSelect('period'),
      contribution,
      onChangeContribution: this.handleChangeNumberField('contribution'),
      disabled:
        initialized ||
        [income, contribution, zipcode, incomeKind, period].filter(Boolean)
          .length < 5
    }
  }

  render() {
    if (this.state.loading) return <B.Spinner overlay />
    return (
      <div>
        <B.Card>
          <B.Content>
            <B.Wrapper>
              <B.Heading>Simulateur acheter ou louer</B.Heading>
            </B.Wrapper>
          </B.Content>
        </B.Card>
        <B.Wrapper>
          <Sentence {...this.sentenceProps()} onSubmit={this.handleSubmit} />
        </B.Wrapper>

        {this.state.initialized && (
          <div>
            <Divider>Résultats</Divider>
            <B.Wrapper>
              <S.Graph>
                <Summary
                  type="rent"
                  initialCost={
                    this.state.results.facts.costs[
                      this.state.results.facts.equilibrium - 1
                    ].rent.initial_costs
                  }
                  recurrentCosts={
                    this.state.results.facts.costs[
                      this.state.results.facts.equilibrium - 1
                    ].rent.recuring_costs
                  }
                  finalSavings={
                    -this.state.results.facts.costs[
                      this.state.results.facts.equilibrium - 1
                    ].rent.final_savings
                  }
                />
                <Graph costs={this.state.results.facts.costs} />
                <Summary
                  type="buy"
                  initialCost={
                    this.state.results.facts.costs[
                      this.state.results.facts.equilibrium - 1
                    ].purchase.initial_costs
                  }
                  recurrentCosts={
                    this.state.results.facts.costs[
                      this.state.results.facts.equilibrium - 1
                    ].purchase.recuring_costs
                  }
                  finalSavings={
                    -this.state.results.facts.costs[
                      this.state.results.facts.equilibrium - 1
                    ].purchase.final_savings
                  }
                />
              </S.Graph>
              <S.Equilibrium>
                Il devient plus rentable d’acheter au bout de{' '}
                <strong>{this.state.results.facts.equilibrium}</strong> ans
                passés dans le bien.
              </S.Equilibrium>
            </B.Wrapper>
            <Divider>Affiner</Divider>
            <B.Wrapper>
              <S.Sections>
                <S.Section>
                  <B.SubHeading>Bien à la location</B.SubHeading>
                  <S.Divider>
                    <B.Divider />
                  </S.Divider>
                  <Input
                    value={this.state.results.rent_per_sqm}
                    onChange={this.handleChangeInput('rent_per_sqm')}
                    label="Loyer au m²"
                    placeholder="300 000"
                    suffix="€"
                  />
                  <Input
                    value={this.state.results.rented_surface || ''}
                    onChange={this.handleChangeInput('rented_surface')}
                    label="Surface"
                    placeholder="100"
                    suffix="m²"
                  />
                  <Input
                    value={this.state.results.facts.rent || ''}
                    label="Loyer"
                    suffix="€"
                  />
                </S.Section>
                <S.Section>
                  <B.SubHeading>Bien à l’achat</B.SubHeading>
                  <S.Divider>
                    <B.Divider />
                  </S.Divider>
                  <Input
                    value={this.state.results.price_per_sqm || ''}
                    onChange={this.handleChangeInput('price_per_sqm')}
                    label="Prix au m²"
                    placeholder="10 000"
                    suffix="€"
                  />
                  <Input
                    value={this.state.results.purchase_surface || ''}
                    onChange={this.handleChangeInput('purchase_surface')}
                    label="Surface"
                    placeholder="100"
                    suffix="m²"
                  />
                  <Input
                    value={this.state.results.facts.price}
                    label="Prix du bien"
                    suffix="€"
                  />
                </S.Section>

                <S.Section>
                  <B.SubHeading>Épargne</B.SubHeading>
                  <S.Divider>
                    <B.Divider />
                  </S.Divider>
                  <Input
                    value={this.state.results.monthly_savings}
                    onChange={this.handleChangeInput('monthly_savings')}
                    label="Épargne mensuelle"
                    placeholder="500"
                    suffix="€"
                  />
                  <Input
                    value={this.state.results.contribution}
                    label="Apport"
                    suffix="€"
                  />
                </S.Section>
                <S.Section>
                  <B.SubHeading>Financement</B.SubHeading>
                  <S.Divider>
                    <B.Divider />
                  </S.Divider>
                  <Input
                    value={this.state.results.mortgage_rate || ''}
                    onChange={this.handleChangeInput('mortgage_rate')}
                    label="Taux"
                    placeholder="1.5"
                    suffix="%"
                    type="decimal"
                  />
                  <Input
                    value={this.state.results.mortgage_duration || ''}
                    onChange={this.handleChangeInput('mortgage_duration')}
                    label="Durée"
                    placeholder="25"
                    suffix="ans"
                  />
                  <Input
                    value={this.state.results.facts.payment}
                    label="Mensualité"
                    suffix="€"
                  />
                </S.Section>

                <S.Section>
                  <B.SubHeading>Frais de locataire</B.SubHeading>
                  <S.Divider>
                    <B.Divider />
                  </S.Divider>
                  <Input
                    value={this.state.results.housing_tax}
                    onChange={this.handleChangeInput('housing_tax')}
                    label="Taxe d'habitation"
                    placeholder="1 000"
                    suffix="€"
                  />
                  <Input
                    value={this.state.results.agency_fees}
                    onChange={this.handleChangeInput('agency_fees')}
                    label="Frais d'agence"
                    placeholder="1 000"
                    suffix="€"
                  />
                </S.Section>
                <S.Section>
                  <B.SubHeading>Frais de propriétaire</B.SubHeading>
                  <S.Divider>
                    <B.Divider />
                  </S.Divider>
                  <Input
                    value={this.state.results.mortgage_rate || ''}
                    onChange={this.handleChangeInput('mortgage_rate')}
                    label="Taux"
                    placeholder="1.5"
                    suffix="%"
                    type="decimal"
                  />
                  <Input
                    value={this.state.results.mortgage_duration || ''}
                    onChange={this.handleChangeInput('mortgage_duration')}
                    label="Durée"
                    placeholder="25"
                    suffix="ans"
                  />
                  <Input
                    value={this.state.results.facts.payment}
                    label="Mensualité"
                    suffix="€"
                  />
                </S.Section>

                <S.Section>
                  <B.SubHeading>Indices financiers</B.SubHeading>
                  <S.Divider>
                    <B.Divider />
                  </S.Divider>
                  <Input
                    value={this.state.results.rent_growth_rate}
                    onChange={this.handleChangeInput('rent_growth_rate')}
                    label="Évolution du loyer"
                    placeholder="1.5"
                    suffix="%"
                    type="decimal"
                  />
                  <Input
                    value={this.state.results.home_price_growth_rate}
                    onChange={this.handleChangeInput('home_price_growth_rate')}
                    label="Évolution de l'immobilier"
                    placeholder="3"
                    suffix="%"
                    type="decimal"
                  />
                  <Input
                    value={this.state.results.savings_return_rate}
                    onChange={this.handleChangeInput('savings_return_rate')}
                    label="Rémunération de l'épargne"
                    placeholder="3"
                    suffix="%"
                    type="decimal"
                  />
                  <Input
                    value={this.state.results.inflation_rate}
                    onChange={this.handleChangeInput('inflation_rate')}
                    label="Inflation"
                    placeholder="3"
                    suffix="%"
                    type="decimal"
                  />
                </S.Section>
              </S.Sections>
              <S.Button>
                <B.Button onClick={this.handleSharpen}>Valider</B.Button>
              </S.Button>
            </B.Wrapper>
          </div>
        )}
      </div>
    )
  }
}

export default Introduction
