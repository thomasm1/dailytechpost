#!/bin/bash
cd infra/k8s && \
echo "Stopping Kubernetes Setup"  && \
kubectl delete deployment event-bus-depl &
echo "Stopping 1/7 Event Bus" && \
kubectl delete deployment query-depl &
echo "Stopping 2/7 Event Query Handler"   && \
kubectl delete deployment posts-depl &
echo "Stopping 3/7 Posts"  && \
kubectl delete deployment comments-depl &
echo "Stopping 4/7 Comments" && \
kubectl delete deployment moderation-depl &
echo "Stopping 5/7 Moderation"  && \
kubectl delete deployment users-depl & 
echo "Stopping 6/7 Users"   && \
kubectl delete deployment client-depl & 
echo "Stopping 7/7 Clients"   && \
 
### Notes:
#### to find/end processes: ps aux | grep "node_1" 
### Shortcut [beware]
#"""kill $(ps aux | grep '[n]ode' | awk '{print $2}')"""

