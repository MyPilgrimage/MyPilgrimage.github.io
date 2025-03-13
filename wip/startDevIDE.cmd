@ECHO OFF
CLS

ECHO "Jekyll Development Enviroment"
ECHO "-----------------------------"

IF EXIST "%LOCALAPPDATA%/GitHubDesktop/GitHubDesktop.exe" (
	ECHO "1. Run Github Desktop"
	START /min "" "%LOCALAPPDATA%/GitHubDesktop/GitHubDesktop.exe"
	ECHO "   Don't forget to Fetch and Pull with Github Desktop!"
) ELSE (
	ECHO "-----------------------------"
	ECHO "     ! NO GITHUB FOUND !     "
	ECHO "-----------------------------"
)

IF EXIST "%PROGRAMFILES%/Docker/Docker/Docker Desktop.exe" (
	ECHO "2. Run Docker Desktop"
	START /min "" "%PROGRAMFILES%/Docker/Docker/Docker Desktop.exe"
	ECHO "   Wait until Docker is Running..."
) ELSE (
	ECHO "-----------------------------"
	ECHO "     ! NO DOCKER FOUND !     "
	ECHO "-----------------------------"
)

ECHO "Once Docker is Running, press a key to continue ..."
PAUSE >nul

IF EXIST C:/Development/VScode/ (
	ECHO "3. Run VS Code"
	START C:/Development/VScode/Code.exe
	EXIT
)
IF EXIST D:/Development/VScode/ (
	ECHO "3. Run VS Code"
	START D:/Development/VScode/Code.exe
	EXIT
) ELSE (
	ECHO "-----------------------------"
	ECHO "    ! NO VS CODE FOUND !     "
	ECHO "-----------------------------"
)

PAUSE