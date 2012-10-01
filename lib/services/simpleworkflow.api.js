var AWS = require('../core');

AWS.SimpleWorkflow.prototype.api = {
  targetPrefix: 'SimpleWorkflowService.',
  operations: {
    countClosedWorkflowExecutions: {
      n: 'CountClosedWorkflowExecutions',
      i: {
        domain: {
          r: 1
        },
        startTimeFilter: {
          t: 'o',
          m: {
            oldestDate: {
              t: 't',
              r: 1
            },
            latestDate: {
              t: 't'
            }
          }
        },
        closeTimeFilter: {
          t: 'o',
          m: {
            oldestDate: {
              t: 't',
              r: 1
            },
            latestDate: {
              t: 't'
            }
          }
        },
        executionFilter: {
          t: 'o',
          m: {
            workflowId: {
              r: 1
            }
          }
        },
        typeFilter: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
            }
          }
        },
        tagFilter: {
          t: 'o',
          m: {
            tag: {
              r: 1
            }
          }
        },
        closeStatusFilter: {
          t: 'o',
          m: {
            status: {
              r: 1
            }
          }
        }
      }
    },
    countOpenWorkflowExecutions: {
      n: 'CountOpenWorkflowExecutions',
      i: {
        domain: {
          r: 1
        },
        startTimeFilter: {
          t: 'o',
          m: {
            oldestDate: {
              t: 't',
              r: 1
            },
            latestDate: {
              t: 't'
            }
          },
          r: 1
        },
        typeFilter: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
            }
          }
        },
        tagFilter: {
          t: 'o',
          m: {
            tag: {
              r: 1
            }
          }
        },
        executionFilter: {
          t: 'o',
          m: {
            workflowId: {
              r: 1
            }
          }
        }
      }
    },
    countPendingActivityTasks: {
      n: 'CountPendingActivityTasks',
      i: {
        domain: {
          r: 1
        },
        taskList: {
          t: 'o',
          m: {
            name: {
              r: 1
            }
          },
          r: 1
        }
      }
    },
    countPendingDecisionTasks: {
      n: 'CountPendingDecisionTasks',
      i: {
        domain: {
          r: 1
        },
        taskList: {
          t: 'o',
          m: {
            name: {
              r: 1
            }
          },
          r: 1
        }
      }
    },
    deprecateActivityType: {
      n: 'DeprecateActivityType',
      i: {
        domain: {
          r: 1
        },
        activityType: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
              r: 1
            }
          },
          r: 1
        }
      }
    },
    deprecateDomain: {
      n: 'DeprecateDomain',
      i: {
        name: {
          r: 1
        }
      }
    },
    deprecateWorkflowType: {
      n: 'DeprecateWorkflowType',
      i: {
        domain: {
          r: 1
        },
        workflowType: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
              r: 1
            }
          },
          r: 1
        }
      }
    },
    describeActivityType: {
      n: 'DescribeActivityType',
      i: {
        domain: {
          r: 1
        },
        activityType: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
              r: 1
            }
          },
          r: 1
        }
      }
    },
    describeDomain: {
      n: 'DescribeDomain',
      i: {
        name: {
          r: 1
        }
      }
    },
    describeWorkflowExecution: {
      n: 'DescribeWorkflowExecution',
      i: {
        domain: {
          r: 1
        },
        execution: {
          t: 'o',
          m: {
            workflowId: {
              r: 1
            },
            runId: {
              r: 1
            }
          },
          r: 1
        }
      }
    },
    describeWorkflowType: {
      n: 'DescribeWorkflowType',
      i: {
        domain: {
          r: 1
        },
        workflowType: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
              r: 1
            }
          },
          r: 1
        }
      }
    },
    getWorkflowExecutionHistory: {
      n: 'GetWorkflowExecutionHistory',
      i: {
        domain: {
          r: 1
        },
        execution: {
          t: 'o',
          m: {
            workflowId: {
              r: 1
            },
            runId: {
              r: 1
            }
          },
          r: 1
        },
        nextPageToken: {
        },
        maximumPageSize: {
          t: 'i'
        },
        reverseOrder: {
          t: 'b'
        }
      }
    },
    listActivityTypes: {
      n: 'ListActivityTypes',
      i: {
        domain: {
          r: 1
        },
        name: {
        },
        registrationStatus: {
          r: 1
        },
        nextPageToken: {
        },
        maximumPageSize: {
          t: 'i'
        },
        reverseOrder: {
          t: 'b'
        }
      }
    },
    listClosedWorkflowExecutions: {
      n: 'ListClosedWorkflowExecutions',
      i: {
        domain: {
          r: 1
        },
        startTimeFilter: {
          t: 'o',
          m: {
            oldestDate: {
              t: 't',
              r: 1
            },
            latestDate: {
              t: 't'
            }
          }
        },
        closeTimeFilter: {
          t: 'o',
          m: {
            oldestDate: {
              t: 't',
              r: 1
            },
            latestDate: {
              t: 't'
            }
          }
        },
        executionFilter: {
          t: 'o',
          m: {
            workflowId: {
              r: 1
            }
          }
        },
        closeStatusFilter: {
          t: 'o',
          m: {
            status: {
              r: 1
            }
          }
        },
        typeFilter: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
            }
          }
        },
        tagFilter: {
          t: 'o',
          m: {
            tag: {
              r: 1
            }
          }
        },
        nextPageToken: {
        },
        maximumPageSize: {
          t: 'i'
        },
        reverseOrder: {
          t: 'b'
        }
      }
    },
    listDomains: {
      n: 'ListDomains',
      i: {
        nextPageToken: {
        },
        registrationStatus: {
          r: 1
        },
        maximumPageSize: {
          t: 'i'
        },
        reverseOrder: {
          t: 'b'
        }
      }
    },
    listOpenWorkflowExecutions: {
      n: 'ListOpenWorkflowExecutions',
      i: {
        domain: {
          r: 1
        },
        startTimeFilter: {
          t: 'o',
          m: {
            oldestDate: {
              t: 't',
              r: 1
            },
            latestDate: {
              t: 't'
            }
          },
          r: 1
        },
        typeFilter: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
            }
          }
        },
        tagFilter: {
          t: 'o',
          m: {
            tag: {
              r: 1
            }
          }
        },
        nextPageToken: {
        },
        maximumPageSize: {
          t: 'i'
        },
        reverseOrder: {
          t: 'b'
        },
        executionFilter: {
          t: 'o',
          m: {
            workflowId: {
              r: 1
            }
          }
        }
      }
    },
    listWorkflowTypes: {
      n: 'ListWorkflowTypes',
      i: {
        domain: {
          r: 1
        },
        name: {
        },
        registrationStatus: {
          r: 1
        },
        nextPageToken: {
        },
        maximumPageSize: {
          t: 'i'
        },
        reverseOrder: {
          t: 'b'
        }
      }
    },
    pollForActivityTask: {
      n: 'PollForActivityTask',
      i: {
        domain: {
          r: 1
        },
        taskList: {
          t: 'o',
          m: {
            name: {
              r: 1
            }
          },
          r: 1
        },
        identity: {
        }
      }
    },
    pollForDecisionTask: {
      n: 'PollForDecisionTask',
      i: {
        domain: {
          r: 1
        },
        taskList: {
          t: 'o',
          m: {
            name: {
              r: 1
            }
          },
          r: 1
        },
        identity: {
        },
        nextPageToken: {
        },
        maximumPageSize: {
          t: 'i'
        },
        reverseOrder: {
          t: 'b'
        }
      }
    },
    recordActivityTaskHeartbeat: {
      n: 'RecordActivityTaskHeartbeat',
      i: {
        taskToken: {
          r: 1
        },
        details: {
        }
      }
    },
    registerActivityType: {
      n: 'RegisterActivityType',
      i: {
        domain: {
          r: 1
        },
        name: {
          r: 1
        },
        version: {
          r: 1
        },
        description: {
        },
        defaultTaskStartToCloseTimeout: {
        },
        defaultTaskHeartbeatTimeout: {
        },
        defaultTaskList: {
          t: 'o',
          m: {
            name: {
              r: 1
            }
          }
        },
        defaultTaskScheduleToStartTimeout: {
        },
        defaultTaskScheduleToCloseTimeout: {
        }
      }
    },
    registerDomain: {
      n: 'RegisterDomain',
      i: {
        name: {
          r: 1
        },
        description: {
        },
        workflowExecutionRetentionPeriodInDays: {
          r: 1
        }
      }
    },
    registerWorkflowType: {
      n: 'RegisterWorkflowType',
      i: {
        domain: {
          r: 1
        },
        name: {
          r: 1
        },
        version: {
          r: 1
        },
        description: {
        },
        defaultTaskStartToCloseTimeout: {
        },
        defaultExecutionStartToCloseTimeout: {
        },
        defaultTaskList: {
          t: 'o',
          m: {
            name: {
              r: 1
            }
          }
        },
        defaultChildPolicy: {
        }
      }
    },
    requestCancelWorkflowExecution: {
      n: 'RequestCancelWorkflowExecution',
      i: {
        domain: {
          r: 1
        },
        workflowId: {
          r: 1
        },
        runId: {
        }
      }
    },
    respondActivityTaskCanceled: {
      n: 'RespondActivityTaskCanceled',
      i: {
        taskToken: {
          r: 1
        },
        details: {
        }
      }
    },
    respondActivityTaskCompleted: {
      n: 'RespondActivityTaskCompleted',
      i: {
        taskToken: {
          r: 1
        },
        result: {
        }
      }
    },
    respondActivityTaskFailed: {
      n: 'RespondActivityTaskFailed',
      i: {
        taskToken: {
          r: 1
        },
        reason: {
        },
        details: {
        }
      }
    },
    respondDecisionTaskCompleted: {
      n: 'RespondDecisionTaskCompleted',
      i: {
        taskToken: {
          r: 1
        },
        decisions: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              decisionType: {
                r: 1
              },
              scheduleActivityTaskDecisionAttributes: {
                t: 'o',
                m: {
                  activityType: {
                    t: 'o',
                    m: {
                      name: {
                        r: 1
                      },
                      version: {
                        r: 1
                      }
                    },
                    r: 1
                  },
                  activityId: {
                    r: 1
                  },
                  control: {
                  },
                  input: {
                  },
                  scheduleToCloseTimeout: {
                  },
                  taskList: {
                    t: 'o',
                    m: {
                      name: {
                        r: 1
                      }
                    }
                  },
                  scheduleToStartTimeout: {
                  },
                  startToCloseTimeout: {
                  },
                  heartbeatTimeout: {
                  }
                }
              },
              requestCancelActivityTaskDecisionAttributes: {
                t: 'o',
                m: {
                  activityId: {
                    r: 1
                  }
                }
              },
              completeWorkflowExecutionDecisionAttributes: {
                t: 'o',
                m: {
                  result: {
                  }
                }
              },
              failWorkflowExecutionDecisionAttributes: {
                t: 'o',
                m: {
                  reason: {
                  },
                  details: {
                  }
                }
              },
              cancelWorkflowExecutionDecisionAttributes: {
                t: 'o',
                m: {
                  details: {
                  }
                }
              },
              continueAsNewWorkflowExecutionDecisionAttributes: {
                t: 'o',
                m: {
                  input: {
                  },
                  executionStartToCloseTimeout: {
                  },
                  taskList: {
                    t: 'o',
                    m: {
                      name: {
                        r: 1
                      }
                    }
                  },
                  taskStartToCloseTimeout: {
                  },
                  childPolicy: {
                  },
                  tagList: {
                    t: 'a',
                    m: {
                    }
                  },
                  workflowTypeVersion: {
                  }
                }
              },
              recordMarkerDecisionAttributes: {
                t: 'o',
                m: {
                  markerName: {
                    r: 1
                  },
                  details: {
                  }
                }
              },
              startTimerDecisionAttributes: {
                t: 'o',
                m: {
                  timerId: {
                    r: 1
                  },
                  control: {
                  },
                  startToFireTimeout: {
                    r: 1
                  }
                }
              },
              cancelTimerDecisionAttributes: {
                t: 'o',
                m: {
                  timerId: {
                    r: 1
                  }
                }
              },
              signalExternalWorkflowExecutionDecisionAttributes: {
                t: 'o',
                m: {
                  workflowId: {
                    r: 1
                  },
                  runId: {
                  },
                  signalName: {
                    r: 1
                  },
                  input: {
                  },
                  control: {
                  }
                }
              },
              requestCancelExternalWorkflowExecutionDecisionAttributes: {
                t: 'o',
                m: {
                  workflowId: {
                    r: 1
                  },
                  runId: {
                  },
                  control: {
                  }
                }
              },
              startChildWorkflowExecutionDecisionAttributes: {
                t: 'o',
                m: {
                  workflowType: {
                    t: 'o',
                    m: {
                      name: {
                        r: 1
                      },
                      version: {
                        r: 1
                      }
                    },
                    r: 1
                  },
                  workflowId: {
                    r: 1
                  },
                  control: {
                  },
                  input: {
                  },
                  executionStartToCloseTimeout: {
                  },
                  taskList: {
                    t: 'o',
                    m: {
                      name: {
                        r: 1
                      }
                    }
                  },
                  taskStartToCloseTimeout: {
                  },
                  childPolicy: {
                  },
                  tagList: {
                    t: 'a',
                    m: {
                    }
                  }
                }
              }
            }
          }
        },
        executionContext: {
        }
      }
    },
    signalWorkflowExecution: {
      n: 'SignalWorkflowExecution',
      i: {
        domain: {
          r: 1
        },
        workflowId: {
          r: 1
        },
        runId: {
        },
        signalName: {
          r: 1
        },
        input: {
        }
      }
    },
    startWorkflowExecution: {
      n: 'StartWorkflowExecution',
      i: {
        domain: {
          r: 1
        },
        workflowId: {
          r: 1
        },
        workflowType: {
          t: 'o',
          m: {
            name: {
              r: 1
            },
            version: {
              r: 1
            }
          },
          r: 1
        },
        taskList: {
          t: 'o',
          m: {
            name: {
              r: 1
            }
          }
        },
        input: {
        },
        executionStartToCloseTimeout: {
        },
        tagList: {
          t: 'a',
          m: {
          }
        },
        taskStartToCloseTimeout: {
        },
        childPolicy: {
        }
      }
    },
    terminateWorkflowExecution: {
      n: 'TerminateWorkflowExecution',
      i: {
        domain: {
          r: 1
        },
        workflowId: {
          r: 1
        },
        runId: {
        },
        reason: {
        },
        details: {
        },
        childPolicy: {
        }
      }
    }
  }
};