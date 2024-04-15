var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"CurrentModule = MLFlowClient","category":"page"},{"location":"reference/#Types","page":"Reference","title":"Types","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"TODO: Document accessors.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"MLFlow\nMLFlowExperiment\nMLFlowRun\nMLFlowRunInfo\nMLFlowRunData\nMLFlowRunDataParam\nMLFlowRunDataMetric\nMLFlowRunStatus\nMLFlowArtifactFileInfo\nMLFlowArtifactDirInfo","category":"page"},{"location":"reference/#MLFlowClient.MLFlow","page":"Reference","title":"MLFlowClient.MLFlow","text":"MLFlow\n\nBase type which defines location and version for MLFlow API service.\n\nFields\n\nbaseuri::String: base MLFlow tracking URI, e.g. http://localhost:5000\napiversion: used API version, e.g. 2.0\nheaders: HTTP headers to be provided with the REST API requests (useful for authetication tokens)\n\nConstructors\n\nMLFlow(baseuri; apiversion=2.0,headers=Dict())\nMLFlow() - defaults to MLFlow(ENV[\"MLFLOW_TRACKING_URI\"]) or MLFlow(\"http://localhost:5000\")\n\nExamples\n\nmlf = MLFlow()\n\nremote_url=\"https://<your-server>.cloud.databricks.com\"; # address of your remote server\nmlf = MLFlow(remote_url, headers=Dict(\"Authorization\" => \"Bearer <your-secret-token>\"))\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowExperiment","page":"Reference","title":"MLFlowClient.MLFlowExperiment","text":"MLFlowExperiment\n\nRepresents an MLFlow experiment.\n\nFields\n\nname::String: experiment name.\nlifecycle_stage::String: life cycle stage, one of [\"active\", \"deleted\"]\nexperiment_id::Integer: experiment identifier.\ntags::Any: list of tags.\nartifact_location::String: where are experiment artifacts stored.\n\nConstructors\n\nMLFlowExperiment(name, lifecycle_stage, experiment_id, tags, artifact_location)\nMLFlowExperiment(exp::Dict{String,Any})\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowRun","page":"Reference","title":"MLFlowClient.MLFlowRun","text":"MLFlowRun\n\nRepresents an MLFlow run.\n\nFields\n\ninfo::MLFlowRunInfo: Run metadata.\ndata::MLFlowRunData: Run data.\n\nConstructors\n\nMLFlowRun(rundata::MLFlowRunData)\nMLFlowRun(runinfo::MLFlowRunInfo)\nMLFlowRun(info::Dict{String,Any})\nMLFlowRun(info::Dict{String,Any}, data::Dict{String,Any})\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowRunInfo","page":"Reference","title":"MLFlowClient.MLFlowRunInfo","text":"MLFlowRunInfo\n\nRepresents run metadata.\n\nFields\n\nrun_id::String: run identifier.\nexperiment_id::Integer: experiment identifier.\nstatus::MLFlowRunStatus: run status.\nrun_name::String: run name.\nstart_time::Union{Int64,Missing}: when was the run started, UNIX time in milliseconds.\nend_time::Union{Int64,Missing}: when did the run end, UNIX time in milliseconds.\nartifact_uri::String: where are artifacts from this run stored.\nlifecycle_stage::String: one of active or deleted.\n\nConstructors\n\nMLFlowRunInfo(run_id, experiment_id, status, run_name, start_time, end_time, artifact_uri, lifecycle_stage)\nMLFlowRunInfo(info::Dict{String,Any})\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowRunData","page":"Reference","title":"MLFlowClient.MLFlowRunData","text":"MLFlowRunData\n\nRepresents run data.\n\nFields\n\nmetrics::Dict{String,MLFlowRunDataMetric}: run metrics.\nparams::Dict{String,MLFlowRunDataParam}: run parameters.\ntags: list of run tags.\n\nConstructors\n\nMLFlowRunData(data::Dict{String,Any})\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowRunDataParam","page":"Reference","title":"MLFlowClient.MLFlowRunDataParam","text":"MLFlowRunDataParam\n\nRepresents a parameter.\n\nFields\n\nkey::String: parameter identifier.\nvalue::String: parameter value.\n\nConstructors\n\nMLFlowRunDataParam(d::Dict{String,String})\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowRunDataMetric","page":"Reference","title":"MLFlowClient.MLFlowRunDataMetric","text":"MLFlowRunDataMetric\n\nRepresents a metric.\n\nFields\n\nkey::String: metric identifier.\nvalue::Float64: metric value.\nstep::Int64: step.\ntimestamp::Int64: timestamp in UNIX time in milliseconds.\n\nConstructors\n\nMLFlowRunDataMetric(d::Dict{String,Any})\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowRunStatus","page":"Reference","title":"MLFlowClient.MLFlowRunStatus","text":"MLFlowRunStatus\n\nRepresents the status of an MLFlow Run.\n\nFields\n\nstatus::String: one of RUNNING/SCHEDULED/FINISHED/FAILED/KILLED\n\nConstructors\n\nMLFlowRunStatus(status::String)\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowArtifactFileInfo","page":"Reference","title":"MLFlowClient.MLFlowArtifactFileInfo","text":"MLFlowArtifactFileInfo\n\nMetadata of a single artifact file – result of listartifacts.\n\nFields\n\nfilepath::String: File path, including the root artifact directory of a run.\nfilesize::Int64: Size in bytes.\n\n\n\n\n\n","category":"type"},{"location":"reference/#MLFlowClient.MLFlowArtifactDirInfo","page":"Reference","title":"MLFlowClient.MLFlowArtifactDirInfo","text":"MLFlowArtifactDirInfo\n\nMetadata of a single artifact directory – result of listartifacts.\n\nFields\n\ndirpath::String: Directory path, including the root artifact directory of a run.\n\n\n\n\n\n","category":"type"},{"location":"reference/#Experiments","page":"Reference","title":"Experiments","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"createexperiment\ngetexperiment\ngetorcreateexperiment\ndeleteexperiment\nsearchexperiments\nrestoreexperiment","category":"page"},{"location":"reference/#MLFlowClient.createexperiment","page":"Reference","title":"MLFlowClient.createexperiment","text":"createexperiment(mlf::MLFlow; name=missing, artifact_location=missing, tags=missing)\n\nCreates an MLFlow experiment.\n\nArguments\n\nmlf: MLFlow configuration.\nname: experiment name. If not specified, MLFlow sets it.\nartifact_location: directory where artifacts of this experiment will be stored. If not specified, MLFlow uses its default configuration.\ntags: a Dictionary of key-values which tag the experiment.\n\nReturns\n\nAn object of type MLFlowExperiment.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.getexperiment","page":"Reference","title":"MLFlowClient.getexperiment","text":"getexperiment(mlf::MLFlow, experiment_id::Integer)\n\nRetrieves an MLFlow experiment by id.\n\nArguments\n\nmlf: MLFlow configuration.\nexperiment_id: Experiment identifier.\n\nReturns\n\nAn instance of type MLFlowExperiment\n\n\n\n\n\ngetexperiment(mlf::MLFlow, experiment_name::String)\n\nRetrieves an MLFlow experiment by name.\n\nArguments\n\nmlf: MLFlow configuration.\nexperiment_name: Experiment name.\n\nReturns\n\nAn instance of type MLFlowExperiment\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.getorcreateexperiment","page":"Reference","title":"MLFlowClient.getorcreateexperiment","text":"getorcreateexperiment(mlf::MLFlow, experiment_name::String; artifact_location=missing, tags=missing)\n\nGets an experiment if one alrady exists, or creates a new one.\n\nArguments\n\nmlf: MLFlow configuration.\nexperiment_name: Experiment name.\nartifact_location: directory where artifacts of this experiment will be stored. If not specified, MLFlow uses its default configuration.\ntags: a Dictionary of key-values which tag the experiment.\n\nReturns\n\nAn instance of type MLFlowExperiment\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.deleteexperiment","page":"Reference","title":"MLFlowClient.deleteexperiment","text":"deleteexperiment(mlf::MLFlow, experiment_id::Integer)\n\nDeletes an MLFlow experiment.\n\nArguments\n\nmlf: MLFlow configuration.\nexperiment_id: experiment identifier.\n\nReturns\n\ntrue if successful. Otherwise, raises exception.\n\n\n\n\n\ndeleteexperiment(mlf::MLFlow, experiment::MLFlowExperiment)\n\nDeletes an MLFlow experiment.\n\nArguments\n\nmlf: MLFlow configuration.\nexperiment: an object of type MLFlowExperiment\n\nDispatches to deleteexperiment(mlf::MLFlow, experiment_id::Integer).\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.searchexperiments","page":"Reference","title":"MLFlowClient.searchexperiments","text":"searchexperiments(mlf::MLFlow)\n\nSearches for experiments in an MLFlow instance.\n\nArguments\n\nmlf: MLFlow configuration.\n\nKeywords\n\nfilter::String: filter as defined in MLFlow documentation\nfilter_attributes::AbstractDict{K,V}: if provided, filter is automatically generated based on filter_attributes using generatefilterfromattributes. One can only provide either filter or filter_attributes, but not both.\nrun_view_type::String: one of ACTIVE_ONLY, DELETED_ONLY, or ALL.\nmax_results::Integer: 50,000 by default.\norder_by::String: as defined in MLFlow documentation\npage_token::String: paging functionality, handled automatically. Not meant to be passed by the user.\n\nReturns\n\nvector of MLFlowExperiment experiments that were found in the MLFlow instance\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.restoreexperiment","page":"Reference","title":"MLFlowClient.restoreexperiment","text":"restoreexperiment(mlf::MLFlow, experiment_id::Integer)\n\nRestores a deleted MLFlow experiment.\n\nArguments\n\nmlf: MLFlow configuration.\nexperiment_id: experiment identifier.\n\nReturns\n\ntrue if successful. Otherwise, raises exception.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Runs","page":"Reference","title":"Runs","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"createrun\ngetrun\nupdaterun\ndeleterun\nsearchruns\nlogparam\nlogmetric\nlogbatch\nlogartifact\nlistartifacts","category":"page"},{"location":"reference/#MLFlowClient.createrun","page":"Reference","title":"MLFlowClient.createrun","text":"createrun(mlf::MLFlow, experiment_id; run_name=missing, start_time=missing, tags=missing)\n\nCreates a run associated to an experiment.\n\nArguments\n\nmlf: MLFlow configuration.\nexperiment_id: experiment identifier.\n\nKeywords\n\nrun_name: run name. If not specified, MLFlow sets it.\nstart_time: if provided, must be a UNIX timestamp in milliseconds. By default, set to current time.\ntags: if provided, must be a key-value structure such as a dictionary.\n\nReturns\n\nan instance of type MLFlowRun\n\n\n\n\n\ncreaterun(mlf::MLFlow, experiment::MLFlowExperiment; run_name=missing, start_time=missing, tags=missing)\n\nDispatches to createrun(mlf::MLFlow, experiment_id; run_name=run_name, start_time=start_time, tags=tags)\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.getrun","page":"Reference","title":"MLFlowClient.getrun","text":"getrun(mlf::MLFlow, run_id)\n\nRetrieves information about an MLFlow run.\n\nArguments\n\nmlf: MLFlow configuration.\nrun_id::String: run identifier.\n\nReturns\n\nan instance of type MLFlowRun\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.updaterun","page":"Reference","title":"MLFlowClient.updaterun","text":"updaterun(mlf::MLFlow, run, status; end_time=missing)\n\nUpdates the status of an experiment's run.\n\nArguments\n\nmlf: MLFlow configuration.\nrun: one of MLFlowRun, MLFlowRunInfo, or String.\nstatus: either String and one of [\"RUNNING\", \"SCHEDULED\", \"FINISHED\", \"FAILED\", \"KILLED\"], or an instance of MLFlowRunStatus\n\nKeywords\n\nrun_name: if provided, must be a String. By default, not set.\nend_time: if provided, must be a UNIX timestamp in milliseconds. By default, set to current time.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.deleterun","page":"Reference","title":"MLFlowClient.deleterun","text":"deleterun(mlf::MLFlow, run)\n\nDeletes an experiment's run.\n\nArguments\n\nmlf: MLFlow configuration.\nrun: one of MLFlowRun, MLFlowRunInfo, or String.\n\nReturns\n\ntrue if successful.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.searchruns","page":"Reference","title":"MLFlowClient.searchruns","text":"searchruns(mlf::MLFlow, experiment_ids)\n\nSearches for runs in an experiment.\n\nArguments\n\nmlf: MLFlow configuration.\nexperiment_ids::AbstractVector{Integer}: experiment_ids in which to search for runs. Can also be a single Integer.\n\nKeywords\n\nfilter::String: filter as defined in MLFlow documentation\nfilter_params::AbstractDict{K,V}: if provided, filter is automatically generated based on filter_params using generatefilterfromparams. One can only provide either filter or filter_params, but not both.\nrun_view_type::String: one of ACTIVE_ONLY, DELETED_ONLY, or ALL.\nmax_results::Integer: 50,000 by default.\norder_by::String: as defined in MLFlow documentation\npage_token::String: paging functionality, handled automatically. Not meant to be passed by the user.\n\nReturns\n\nvector of MLFlowRun runs that were found in the list of experiments.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.logparam","page":"Reference","title":"MLFlowClient.logparam","text":"logparam(mlf::MLFlow, run, key, value)\nlogparam(mlf::MLFlow, run, kv)\n\nAssociates a key/value pair of parameters to the particular run.\n\nArguments\n\nmlf: MLFlow configuration.\nrun: one of MLFlowRun, MLFlowRunInfo, or String.\nkey: parameter key (name). Automatically converted to string before sending to MLFlow because this is the only type that MLFlow supports.\nvalue: parameter value. Automatically converted to string before sending to MLFlow because this is the only type that MLFlow supports.\n\nOne could also specify kv::Dict instead of separate key and value arguments.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.logmetric","page":"Reference","title":"MLFlowClient.logmetric","text":"logmetric(mlf::MLFlow, run, key, value::T; timestamp, step) where T<:Real\nlogmetric(mlf::MLFlow, run, key, values::AbstractArray{T}; timestamp, step) where T<:Real\n\nLogs a metric value (or values) against a particular run.\n\nArguments\n\nmlf: MLFlow configuration.\nrun: one of MLFlowRun, MLFlowRunInfo, or String\nkey: metric name.\nvalue: metric value, must be numeric.\n\nKeywords\n\ntimestamp: if provided, must be a UNIX timestamp in milliseconds. By default, set to current time.\nstep: step at which the metric value has been taken.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.logbatch","page":"Reference","title":"MLFlowClient.logbatch","text":"logbatch(mlf::MLFlow, run_id::String, metrics, params, tags)\n\nLogs a batch of metrics, parameters and tags to an experiment run.\n\nArguments\n\nmlf::MLFlow: MLFlow onfiguration.\nrun_id::String: ID of the run to log to.\nmetrics: a vector of MLFlowRunDataMetric or a vector of\n\nNamedTuples of (name, value, timestamp).\n\nparams: a vector of MLFlowRunDataParam or a vector of NamedTuples\n\nof (name, value).\n\ntags: a vector of strings.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.logartifact","page":"Reference","title":"MLFlowClient.logartifact","text":"logartifact(mlf::MLFlow, run, basefilename, data)\n\nStores an artifact (file) in the run's artifact location.\n\nnote: Note\nAssumes that artifact_uri is mapped to a local directory. At the moment, this only works if both MLFlow and the client are running on the same host or they map a directory that leads to the same location over NFS, for example.\n\nArguments\n\nmlf::MLFlow: MLFlow onfiguration. Currently not used, but when this method is extended to support S3, information from mlf will be needed.\nrun: one of MLFlowRun, MLFlowRunInfo or String.\nbasefilename: name of the file to be written.\ndata: artifact content, an object that can be written directly to a file handle.\n\nThrows\n\nan ErrorException if an exception occurs during writing artifact.\n\nReturns\n\npath of the artifact that was created.\n\n\n\n\n\nlogartifact(mlf::MLFlow, run, filepath)\n\nStores an artifact (file) in the run's artifact location. The name of the artifact is calculated using basename(filepath).\n\nDispatches on logartifact(mlf::MLFlow, run, basefilename, data) where data is the contents of filepath.\n\nThrows\n\nan ErrorException if filepath does not exist.\nan exception if such occurs while trying to read the contents of filepath.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.listartifacts","page":"Reference","title":"MLFlowClient.listartifacts","text":"listartifacts(mlf::MLFlow, run)\n\nLists the artifacts associated with an experiment run. According to MLFlow documentation, this API endpoint should return paged results, similar to searchruns. However, after some experimentation, this doesn't seem to be the case. Therefore, the paging functionality is not implemented here.\n\nArguments\n\nmlf::MLFlow: MLFlow onfiguration. Currently not used, but when this method is extended to support S3, information from mlf will be needed.\nrun: one of MLFlowRun, MLFlowRunInfo or String.\n\nKeywords\n\npath::String: path of a directory within the artifact location. If set, returns the contents of the directory. By default, this is the root directory of the artifacts.\nmaxdepth::Int64: depth of listing. Default is 1. This will only return the files/directories in the current path. To return all artifacts files and directories, use maxdepth=-1.\n\nReturns\n\nA vector of Union{MLFlowArtifactFileInfo,MLFlowArtifactDirInfo}.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Utilities","page":"Reference","title":"Utilities","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"mlfget\nmlfpost\nuri\ngeneratefilterfromentity_type\ngeneratefilterfromparams\ngeneratefilterfromattributes\nhealthcheck","category":"page"},{"location":"reference/#MLFlowClient.mlfget","page":"Reference","title":"MLFlowClient.mlfget","text":"mlfget(mlf, endpoint; kwargs...)\n\nPerforms a HTTP GET to a specified endpoint. kwargs are turned into GET params.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.mlfpost","page":"Reference","title":"MLFlowClient.mlfpost","text":"mlfpost(mlf, endpoint; kwargs...)\n\nPerforms a HTTP POST to the specified endpoint. kwargs are converted to JSON and become the POST body.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.uri","page":"Reference","title":"MLFlowClient.uri","text":"uri(mlf::MLFlow, endpoint=\"\", query=missing)\n\nRetrieves an URI based on mlf, endpoint, and, optionally, query.\n\nExamples\n\nMLFlowClient.uri(mlf, \"experiments/get\", Dict(:experiment_id=>10))\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.generatefilterfromentity_type","page":"Reference","title":"MLFlowClient.generatefilterfromentity_type","text":"generatefilterfromentity_type(filter_params::AbstractDict{K,V}, entity_type::String) where {K,V}\n\nGenerates a filter string from filter_params dictionary and entity_type.\n\nArguments\n\nfilter_params: dictionary to use for filter generation.\nentity_type: entity type to use for filter generation.\n\nReturns\n\nA string that can be passed as filter to searchruns.\n\nExamples\n\ngeneratefilterfromentity_type(Dict(\"paramkey1\" => \"paramvalue1\", \"paramkey2\" => \"paramvalue2\"), \"param\")\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.generatefilterfromparams","page":"Reference","title":"MLFlowClient.generatefilterfromparams","text":"generatefilterfromparams(filter_params::AbstractDict{K,V}) where {K,V}\n\nGenerates a filter string from filter_params dictionary and param entity type.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.generatefilterfromattributes","page":"Reference","title":"MLFlowClient.generatefilterfromattributes","text":"generatefilterfrommattributes(filter_attributes::AbstractDict{K,V}) where {K,V}\n\nGenerates a filter string from filter_attributes dictionary and attribute entity type.\n\n\n\n\n\n","category":"function"},{"location":"reference/#MLFlowClient.healthcheck","page":"Reference","title":"MLFlowClient.healthcheck","text":"healthcheck(mlf::MLFlow)\n\nChecks if MLFlow server is up and running. Returns true if it is, false otherwise.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = MLFlowClient","category":"page"},{"location":"#MLFlowClient","page":"Home","title":"MLFlowClient","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"MLFlowClient","category":"page"},{"location":"#MLFlowClient.MLFlowClient","page":"Home","title":"MLFlowClient.MLFlowClient","text":"MLFlowClient\n\nMLFlowClient is a Julia package for working with MLFlow using the REST API v2.0.\n\nMLFlowClient allows you to create and manage MLFlow experiments, runs, and log metrics and artifacts. If you are not familiar with MLFlow and its concepts, please refer to MLFlow documentation.\n\nLimitations\n\nno authentication support.\nwhen storing artifacts, the assumption is that MLFlow and this library run on the same server. Artifacts are stored using plain filesystem operations. Therefore, /mlruns or the specified artifact_location must be accessible to both the MLFlow server (read), and this library (write).\n\n\n\n\n\n","category":"module"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install MLFlowClient, start a julia session and run the following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> import Pkg\n\njulia> Pkg.add(\"MLFlowClient\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"or simply:","category":"page"},{"location":"","page":"Home","title":"Home","text":"]add MLFlowClient","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"For a more comprehensive MLFlow tutorial, refer to its documentation.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This tutorial assumes that you are familiar with MLFlow concepts and focuses on usage of MLFlowClient.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Suppose that you are developing a method getpricepath(α, n) which generates a random price path using α. This example is adapted from QuantEcon Chapter 1.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using Plots\nusing Random\n\nαs = [0.0, 0.9, 0.98]\nn = 100\np = plot()\n\nfunction getpricepath(α, n)\n    x = zeros(n + 1)\n    x[1] = 0.0\n    for t in 1:n\n        x[t+1] = α * x[t] + rand()\n    end\n    x\nend\n\npricepaths = [getpricepath(α, n) for α in αs]\n\nfor (idx, pricepath) in enumerate(pricepaths)\n    plot!(p, pricepath,\n        title=\"Random price paths\",\n        label=\"alpha = $(αs[idx])\",\n        xlabel=\"Timestep\", ylabel=\"Price\"\n    )\nend\n\np","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This could result in the following plot:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(Image: )","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Now, suppose that you are interested in turning this into an experiment which stores its metadata and results in MLFlow using MLFlowClient. You could amend the code like this:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"note: Note\nRunning this example assumes you have an active MLFlow running on your computer.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using Plots\nusing MLFlowClient\nusing Random\n\n# Parameters\nαs = [0.0, 0.9, 0.98]\nn = 100\n\n\"Method that generates price paths of length `n` based on `α`\"\nfunction getpricepath(α, n)\n    x = zeros(n + 1)\n    x[1] = 0.0\n    for t in 1:n\n        x[t+1] = α * x[t] + rand()\n    end\n    x\nend\np = plot()\n\n# Create MLFlow instance\nmlf = MLFlow(\"http://localhost:5000\")\n\n# Initiate new experiment\nexperiment_id = createexperiment(mlf; name=\"price-paths\")\n\n# Create a run in the new experiment\nexprun = createrun(mlf, experiment_id)\n\n# Log parameters and their values\nfor (idx, α) in enumerate(αs)\n    logparam(mlf, exprun, \"alpha$(idx)\", string(α)) # MLFlow only supports string parameter values\nend\n\n# Obtain pricepaths\npricepaths = [getpricepath(α, n) for α in αs]\n\n# Log pricepaths in MLFlow\nfor (idx, pricepath) in enumerate(pricepaths)\n    plot!(p,\n        pricepath,\n        title=\"Random price paths\",\n        label=\"alpha = $(αs[idx])\",\n        xlabel=\"Timestep\",\n        ylabel=\"Price\"\n    )\n\n    logmetric(mlf, exprun, \"pricepath$(idx)\", pricepath)\nend\n\n# Save the price path plot as an image\nplotfilename = \"pricepaths-plot.png\"\npng(plotfilename)\n\n# Upload the plot as an artifact associated with the MLFlow experiment's run\nlogartifact(mlf, exprun, plotfilename)\n\n# remote temporary plot which was already uploaded in MLFlow\nrm(plotfilename)\n\n# complete the experiment\nupdaterun(mlf, exprun, \"FINISHED\")","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This will result in the folowing experiment created in your MLFlow which is running on http://localhost/:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(Image: )","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"You can also observe series logged against individual metrics, i.e. pricepath1 looks like this in MLFlow:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(Image: )","category":"page"}]
}
