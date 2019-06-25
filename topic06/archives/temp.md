aws cognito-idp sign-up \
  --region eu-west-1 \
  --client-id 6p7v4ttj27bnhcm9ts3d8dn50b \
  --username admin@example.com \
  --password Passw0rd!


  aws cognito-idp admin-confirm-sign-up \
  --region  eu-west-1 \
  --user-pool-id  eu-west-1_3CeKvoKvP \
  --username admin@example.com

  aws cognito-idp admin-delete-user --user-pool-id  eu-west-1_3CeKvoKvP --username admin@example.com 


  Hi Martin, in mock-auth-backend/config/defaults.json change the line:
      "cors-origin": "http://localhost:8080",
to:
    "cors-origin": "*",

IOW, allow requests to the server to come from all (*) other origins., not just localhost:8080. I'll update the lab to fix this bug. Tks