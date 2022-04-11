import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntriyLines({ entries, deleteEntry, editEntry }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry}
                />
            ))}
        </Container>
    );
}

export default EntriyLines;
