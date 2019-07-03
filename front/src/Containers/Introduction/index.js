import React, { Component } from 'react'
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
    income: '',
    contribution: '',
    zipcode: '',
    incomeKind: '',
    period: '',
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
    // const data = {}
    // const promise = await fetch(
    //   `http://localhost:3000/initialize?data=${JSON.stringify(data)}`
    // )
    // const results = await promise.json()
    // console.log('results', results)
    this.setState(prevState => ({
      ...prevState,
      initialized: true,
      results: {
        ...prevState.results,
        price_per_sqm: 10000,
        purchase_surface: 100,
        facts: {
          ...prevState.results.facts,
          price: 1000000
        }
      }
    }))
  }
  getResults = async () => {
    // const data = {}
    // const promise = await fetch(
    //   `http://localhost:3000/sharpen?data=${JSON.stringify(data)}`
    // )
    // const results = await promise.json()
    // this.setState(prevState => ({
    //   ...prevState,
    //   results: {
    //     ...prevState.results,
    //     price_per_sqm: 10000
    //   }
    // }))
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

  handleChangeInput = key => ({ value }) =>
    this.setState(prevState => ({
      ...prevState,
      results: {
        ...prevState.results,
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
      onChangeContribution: this.handleChangeNumberField('contribution')
      // disabled:
      //   initialized ||
      //   [income, contribution, zipcode, incomeKind, period].filter(Boolean)
      //     .length < 5
    }
  }

  render() {
    return (
      <div>
        <B.Card>
          <B.Content>
            <B.Heading>Simulateur acheter ou louer</B.Heading>
          </B.Content>
        </B.Card>
        <Sentence {...this.sentenceProps()} onSubmit={this.handleSubmit} />

        <Divider>Résultats</Divider>
        <S.Graph>
          <Summary
            type="rent"
            initialCost={0}
            recurrentCosts={0}
            finalSavings={0}
          />
          <Graph />
          <Summary
            type="buy"
            initialCost={0}
            recurrentCosts={0}
            finalSavings={0}
          />
        </S.Graph>
        {this.state.initialized && (
          <div>
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
                // onChange={this.handleChangeInput('price_per_sqm')}
                label="Prix du bien"
                // placeholder="300 000"
              />
              <div>Bien à la location</div>
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
