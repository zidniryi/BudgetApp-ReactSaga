import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance label={"Income"} value="1,0990.1" color={"green"} />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance label={"Expenses"} value="990.1" color={"red"} />
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        </Segment>
    )
}

export default DisplayBalances