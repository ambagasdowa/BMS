---
title: "Status of the Project Inventory"
author: "baizabal.jesus@gmail.com"
author: " あるべると へすす"
extensions:
  - image_ueberzug
  - qrcode
  - render
styles:
  style: solarized-dark
  table:
    column_spacing: 15
  margin:
    top: 3
    bottom: 0
  padding:
    top: 3
    bottom: 3
---

## Structure of BMS

> Flow Diagram

```mermaid-38
sequenceDiagram
autonumber
participant dakv
    participant W as writer worker
    participant C as compaction worker
    Note over dakv: main thread
    Note over W: writer thread
    Note over C: compaction thread
    dakv->>W: start writer worker
    dakv->>C: start compaction worker
    loop
        W-->>W: wait for writer signal
    end
    loop
        C-->>C: Wait for compaction signal
    end
    participant Log as write ahead log
    participant Mem as memtable
    dakv->>W: write kv record
    W-->>C: maybe trigger compaction
    W->>Log: write record
    W->>Mem: insert into memtable
    W->>dakv: send OK message
```

---

```mermaid
sequenceDiagram
    autonumber
    Student->>Admin: Can I enrol this semester?
    loop enrolmentCheck
        Admin->>Admin: Check previous results
    end
    Note right of Admin: Exam results may <br> be delayed
    Admin-->>Student: Enrolment success
    Admin->>Professor: Assign student to tutor
    Professor-->>Admin: Student is assigned
```

---

### Authentication Using OAuth Token

```mermaid
sequenceDiagram
    autonumber
    participant Client
    participant OAuthProvider
    participant Service
    Client->>OAuthProvider: Request access token
    activate OAuthProvider
    OAuthProvider->>Client: Send access token
    deactivate OAuthProvider
    Client->>Service: Request resource
    activate Service
    Service->>OAuthProvider: Validate token
    activate OAuthProvider
    OAuthProvider->>Service: Token valid
    deactivate OAuthProvider
    Service->>Client: send resource
    deactivate Service
```

---

### Flowchart

```mermaid-30
graph TB
     id1([START])
     id1-->id10[[reset order values to defaults]]
     id10-->id20[/user inputs order details/]
     id20-->id30{order valid?}
     id30 -->|Yes| id40[calculate total price]
     id30 -->|No| id50[/display error/]-->id20
     id40-->id60[/display order summary/]
     id60-->id70[(save order)]
     id70-->id9999([END])
```

---

```mermaid
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A
        od>Odd shape]-- Two line<br/>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange
```

---

```mermaid
sequenceDiagram
    participant web as Web Browser
    participant blog as Blog Service
    participant account as Account Service
    participant mail as Mail Service
    participant db as Storage

    Note over web,db: The user must be logged in to submit blog posts
    web->>+account: Logs in using credentials
    account->>db: Query stored accounts
    db->>account: Respond with query result

    alt Credentials not found
        account->>web: Invalid credentials
    else Credentials found
        account->>-web: Successfully logged in

        Note over web,db: When the user is authenticated, they can now submit new posts
        web->>+blog: Submit new post
        blog->>db: Store post data

        par Notifications
            blog--)mail: Send mail to blog subscribers
            blog--)db: Store in-site notifications
        and Response
            blog-->>-web: Successfully posted
        end
    end
```

---

### SMCAT

```smcat
eat   [color="#008800"],
sleep [color="blue" active],
meow  [color="red"],
play  [color="purple"];

sleep -> meow  [color="red"]            : wake up;
meow  -> meow  [color="red"]            : no response from human;
meow  -> eat   [color="#008800"]        : human gives food;
meow  -> play  [color="purple"]         : human gives toy;
play  -> sleep [color="blue"]           : tired or bored;
eat   -> sleep [color="blue" width=3.5] : belly full;
```
