# Agent Instructions

Applies to any agentic coding tool (Claude Code, Cursor, Copilot, etc.) working
in this repo.

## Secrets & credentials

Before creating, editing, committing, or pushing anything involving API keys,
tokens, `.env` files, service-account JSON, OAuth secrets, private keys, or
deploy tokens — and before the first push of a repo — follow our canonical
standard, kept in the App Boilerplate:

`Berkeley Labs - App Boilerplate/CREDENTIALS.md`

Key rules:
- Never commit real secrets. Commit only `.env.example` / `*.example.json` placeholders.
- Real `.env` and credential files must be gitignored.
- Never put a GitHub PAT in `.env`.
- Never delete or rewrite `~/.git-credentials`; each repo has its own per-repo PAT.
- Run the secret-scan checklist in `CREDENTIALS.md` before a first push.
