#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MCP_DIR="$SCRIPT_DIR/backend/mcp-ai"
VENV_ACTIVATE="$MCP_DIR/venv/bin/activate"

if [ ! -d "$MCP_DIR" ]; then
  echo "Error: MCP directory not found at $MCP_DIR" >&2
  exit 1
fi

if [ ! -f "$VENV_ACTIVATE" ]; then
  echo "Error: Python virtualenv not found. Expected $VENV_ACTIVATE" >&2
  echo "Run backend/setup or create the venv before starting agents." >&2
  exit 1
fi

echo "Starting MCP agents in new Terminal windows..."

# Export environment variables from .env files
if [ -f "$MCP_DIR/.env" ]; then
  export $(grep -v '^#' "$MCP_DIR/.env" | xargs)
fi

osascript <<EOF
tell application "Terminal"
  activate
  do script "cd '$MCP_DIR'; source '$VENV_ACTIVATE'; export COHERE_API_KEY='$COHERE_API_KEY'; export OPENWEATHER_API_KEY='$OPENWEATHER_API_KEY'; export ORS_API_KEY='$ORS_API_KEY'; python orchestrator_mcp.py"
  delay 1
  do script "cd '$MCP_DIR'; source '$VENV_ACTIVATE'; export COHERE_API_KEY='$COHERE_API_KEY'; export OPENWEATHER_API_KEY='$OPENWEATHER_API_KEY'; export ORS_API_KEY='$ORS_API_KEY'; python map_agent_mcp.py"
  delay 1
  do script "cd '$MCP_DIR'; source '$VENV_ACTIVATE'; export COHERE_API_KEY='$COHERE_API_KEY'; export OPENWEATHER_API_KEY='$OPENWEATHER_API_KEY'; export ORS_API_KEY='$ORS_API_KEY'; python weather_agent_mcp.py"
  delay 1
  do script "cd '$MCP_DIR'; source '$VENV_ACTIVATE'; export COHERE_API_KEY='$COHERE_API_KEY'; export OPENWEATHER_API_KEY='$OPENWEATHER_API_KEY'; export ORS_API_KEY='$ORS_API_KEY'; python itinerary_agent_mcp.py"
  delay 1
  do script "cd '$MCP_DIR'; source '$VENV_ACTIVATE'; export COHERE_API_KEY='$COHERE_API_KEY'; export OPENWEATHER_API_KEY='$OPENWEATHER_API_KEY'; export ORS_API_KEY='$ORS_API_KEY'; python event_agent_mcp.py"
  delay 1
  do script "cd '$MCP_DIR'; source '$VENV_ACTIVATE'; export COHERE_API_KEY='$COHERE_API_KEY'; export OPENWEATHER_API_KEY='$OPENWEATHER_API_KEY'; export ORS_API_KEY='$ORS_API_KEY'; python budget_agent_mcp.py"
  activate
end tell
EOF

echo "All MCP agents launched in Terminal. Monitor each window for live logs."
