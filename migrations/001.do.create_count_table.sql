CREATE TABLE counts (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    modified TIMESTAMPTZ DEFAULT now() NOT NULL,
    counts INTEGER DEFAULT 0,
    dollars FLOAT DEFAULT 0
);