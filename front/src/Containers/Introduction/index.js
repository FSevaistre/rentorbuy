import React, { Component } from 'react'
import { omit } from 'lodash'
import PropTypes from 'prop-types'
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
    const promise = await fetch(
      `http://10.10.0.95:3000/initialize`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ income, contribution, zipcode: zipcode.toString() })
      }
    )
    const results = await promise.json()
    console.log(results)
    this.setState(prevState => ({
      ...prevState,
      initialized: true,
      loading: false,
      results
    }))
  }
  getResults = async () => {
    const promise = await fetch(
      `http://10.10.0.95:3000/sharpen`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(omit(this.state.results, ["facts"]))
      }
    )
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

  handleChangeInput = key => (value) =>
    this.setState(prevState => ({
      ...prevState,
      results: { ...prevState.results,
        [key]: value
      }
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
    if(this.state.loading) return <B.Spinner overlay />
    return (
      <div>
        <B.Card>
          <B.Content>
            <B.Heading>Simulateur acheter ou louer</B.Heading>
          </B.Content>
        </B.Card>
        <Sentence {...this.sentenceProps()} onSubmit={this.handleSubmit} />

        {this.state.initialized && (
          <div>
            <Divider>Résultats</Divider>
            <S.Graph>
              <Summary
                type="rent"
                initialCost={this.state.results.facts.costs[this.state.results.facts.equilibrium-1].rent.initial_costs}
                recurrentCosts={this.state.results.facts.costs[this.state.results.facts.equilibrium-1].rent.recuring_costs}
                finalSavings={-this.state.results.facts.costs[this.state.results.facts.equilibrium-1].rent.final_savings}
              />
              <Graph />
              <Summary
                type="buy"
                initialCost={this.state.results.facts.costs[this.state.results.facts.equilibrium-1].purchase.initial_costs}
                recurrentCosts={this.state.results.facts.costs[this.state.results.facts.equilibrium-1].purchase.recuring_costs}
                finalSavings={-this.state.results.facts.costs[this.state.results.facts.equilibrium-1].purchase.final_savings}
              />
            </S.Graph>
            <p> Il devient plus rentable d'acheter au bout de {this.state.results.facts.equilibrium} ans passés dans le bien</p>
              <Input
                value={this.state.results.home_price_growth_rate || ''}
                type='decimal'
                onChange={this.handleChangeInput('home_price_growth_rate')}
                label="Taux d'augmentation de l'immobilier"
                placeholder="1"
              />
            <Divider>Affiner</Divider>
            <div>
              <div>Bien à l’achat</div>
              <Input
                value={this.state.results.price_per_sqm || ''}
                onChange={this.handleChangeInput('price_per_sqm')}
                label="Prix au m2"
                placeholder="10 000"
              />
              <Input
                value={this.state.results.purchase_surface || ''}
                onChange={this.handleChangeInput('purchase_surface')}
                label="Surface"
                placeholder="100"
              />
              <Input
                value={this.state.results.facts.price}
                label=""
              />
              <div>Bien à la location</div>
              <Input
                value={this.state.results.facts.rent || ''}
                label="Loyer"
              />
              <Input
                value={this.state.results.rented_surface || ''}
                onChange={this.handleChangeInput('rented_surface')}
                label="Surface"
                placeholder="100"
              />
              <Input
                value={this.state.results.rent_per_sqm}
                onChange={this.handleChangeInput('rent_per_sqm')}
                label="Loyer au m²"
                placeholder="300 000"
              />
            </div>
            <div>
              <div>Épargne</div>
              <div>Financement</div>
            </div>
            <div>
              <div>Frais de location</div>
              <div>Frais de propriétaire</div>
            </div>
            <div>Indices financiers</div>
            <B.Button onClick={this.handleSharpen}>Valider</B.Button>
          </div>
        )}
      </div>
    )
  }
}

export default Introduction
