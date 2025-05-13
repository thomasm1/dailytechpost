#!/bin/bash
cd infra/k8s && \
echo "Starting Kubernetes Setup"  && \
kubectl apply -f event-bus-depl.yaml &
echo "Running 1/7 Event Bus"  && \
kubectl apply -f query-depl.yaml &
echo "Running 2/7 Event Query Handler"   && \
kubectl apply -f posts-depl.yaml &
echo "Running 3/7 Posts"  && \
kubectl apply -f comments-depl.yaml &
echo "Running 4/7 Comments" && \
kubectl apply -f moderation-depl.yaml &
echo "Running 5/7 Moderation"  && \
kubectl apply -f users-depl.yaml & 
echo "Running 6/7 Users"   && \
kubectl apply -f client-depl.yaml & 
echo "Running 7/7 Clients"   && \
 
### Notes:
#### to find/end processes: ps aux | grep "node_1" 
### Shortcut [beware]
#"""kill $(ps aux | grep '[n]ode' | awk '{print $2}')"""

