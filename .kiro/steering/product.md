# Product Overview

AdaptasiAI is a multi-tenant AI platform built on Payload CMS that enables companies to create and manage AI agents with custom tools and document knowledge bases.

## Core Features

- **AI Agents**: Configurable AI agents with custom system prompts and first messages
- **Tool Integration**: HTTP webhook-based tools with configurable methods, headers, query params, and body
- **Document Management**: Support for text content and file uploads with metadata
- **Multi-tenancy**: Company-based organization with domain-based access
- **Media Storage**: S3-compatible file storage with image processing
- **Email Integration**: Nodemailer-based email system

## Data Model

- **Agents**: AI assistants with tools and document relationships
- **Tools**: HTTP webhook configurations for external integrations
- **Documents**: Knowledge base items (text or file-based)
- **Companies**: Multi-tenant organization structure
- **Users**: Authentication-enabled admin users
- **Media**: File uploads with S3 storage

## Architecture

Built as a headless CMS with Payload 3.0, providing both admin interface and API endpoints for agent management and operations.