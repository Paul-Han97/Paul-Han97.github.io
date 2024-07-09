# git bash ssh 경로
```bash
$ cd ~/.ssh
```

# SSH 생성
```bash
# 시스템이 ed25519를 지원 하는 경우
$ ssh-keygen -t ed25519 -C "your_email@example.com"

# 시스템이 ed25519를 지원하지 않는 경우
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# SSH의 파일 이름은 수정하는것을 권장
```


# ssh-agent 실행 (다음 중 하나만 선택)
### PowerShell
```powershell
# start the ssh-agent in the background
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
```

### GitBash
```bash
$ ssh-agent
$ eval "$(ssh-agent -s)"
```

# ssh-agent에 ssh-key 추가
```bash
$ ssh-add ~/.ssh/id_filename
```

# ssh-agent에 추가된 ssh-key 조회
```bash
$ ssh-add -l
```

# ssh-agent에 추가된 ssh-key 제거
```bash
$ ssh-add -D
```

# github에 ssh-key 등록
### SSH 공개 키를 클립보드에 복사
```bash
# *.pub 확장자가 공개키
$ clip < ~/.ssh/id_filename.pub
```

### SSH 공개키를 등록
github 우상단 프로필 - Settings - (좌측 사이드바 Access 메뉴에서) SSH and GPG keys - New SSH key

> 예시
Title - 개인노트북
Key type - Authentication Key
Key - 복사한 SSH-Key 붙여넣기

# .ssh/config 작성
### A 계정
```
HOST github.com-A
HOSTNAME github.com
User git
IdentityFile ~/.ssh/id_Afilename
```
### B 계정
```
HOST github.com-B
HOSTNAME github.com
User git
IdentityFile ~/.ssh/id_Bfilename
```

# git local config 수정
```bash
$ git config -e
```
```
[remote "origin"]
	url = git@github.com-A:{user.name}/{Repository Name}
```