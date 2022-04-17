import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntriyLines({ entries }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                />
            ))}
        </Container>
    );
}

export default EntriyLines;
