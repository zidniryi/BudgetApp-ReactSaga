import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({ totalIncome, totalExpense }) {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance label={"Income"} value={totalIncome} color={"green"} />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance label={"Expenses"} value={totalExpense} color={"red"} />
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        </Segment>
    )
}

export default DisplayBalances