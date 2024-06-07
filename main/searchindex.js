Search.setIndex({"docnames": ["api_ref_dtypes", "api_ref_intro", "api_ref_kernel", "api_ref_quantization", "api_ref_sparsity", "dtypes", "generated/torchao.dtypes.UInt4Tensor", "generated/torchao.dtypes.from_float6_e3m2", "generated/torchao.dtypes.to_float6_e3m2", "generated/torchao.dtypes.to_nf4", "generated/torchao.quantization.Int4WeightOnlyGPTQQuantizer", "generated/torchao.quantization.Int4WeightOnlyQuantizer", "generated/torchao.quantization.SmoothFakeDynQuantMixin", "generated/torchao.quantization.SmoothFakeDynamicallyQuantizedLinear", "generated/torchao.quantization.apply_dynamic_quant", "generated/torchao.quantization.apply_weight_only_int8_quant", "generated/torchao.quantization.change_linear_weights_to_int4_woqtensors", "generated/torchao.quantization.change_linear_weights_to_int8_dqtensors", "generated/torchao.quantization.change_linear_weights_to_int8_woqtensors", "generated/torchao.quantization.smooth_fq_linear_to_inference", "generated/torchao.quantization.swap_linear_with_smooth_fq_linear", "generated/torchao.sparsity.PerChannelNormObserver", "generated/torchao.sparsity.WandaSparsifier", "generated/torchao.sparsity.apply_fake_sparsity", "generated/torchao.sparsity.apply_sparse_semi_structured", "getting-started", "index", "overview", "performant_kernels", "quantization", "sg_execution_times", "sparsity", "tutorials/index", "tutorials/sg_execution_times", "tutorials/template_tutorial"], "filenames": ["api_ref_dtypes.rst", "api_ref_intro.rst", "api_ref_kernel.rst", "api_ref_quantization.rst", "api_ref_sparsity.rst", "dtypes.rst", "generated/torchao.dtypes.UInt4Tensor.rst", "generated/torchao.dtypes.from_float6_e3m2.rst", "generated/torchao.dtypes.to_float6_e3m2.rst", "generated/torchao.dtypes.to_nf4.rst", "generated/torchao.quantization.Int4WeightOnlyGPTQQuantizer.rst", "generated/torchao.quantization.Int4WeightOnlyQuantizer.rst", "generated/torchao.quantization.SmoothFakeDynQuantMixin.rst", "generated/torchao.quantization.SmoothFakeDynamicallyQuantizedLinear.rst", "generated/torchao.quantization.apply_dynamic_quant.rst", "generated/torchao.quantization.apply_weight_only_int8_quant.rst", "generated/torchao.quantization.change_linear_weights_to_int4_woqtensors.rst", "generated/torchao.quantization.change_linear_weights_to_int8_dqtensors.rst", "generated/torchao.quantization.change_linear_weights_to_int8_woqtensors.rst", "generated/torchao.quantization.smooth_fq_linear_to_inference.rst", "generated/torchao.quantization.swap_linear_with_smooth_fq_linear.rst", "generated/torchao.sparsity.PerChannelNormObserver.rst", "generated/torchao.sparsity.WandaSparsifier.rst", "generated/torchao.sparsity.apply_fake_sparsity.rst", "generated/torchao.sparsity.apply_sparse_semi_structured.rst", "getting-started.rst", "index.rst", "overview.rst", "performant_kernels.rst", "quantization.rst", "sg_execution_times.rst", "sparsity.rst", "tutorials/index.rst", "tutorials/sg_execution_times.rst", "tutorials/template_tutorial.rst"], "titles": ["torchao.dtypes", "<code class=\"docutils literal notranslate\"><span class=\"pre\">torchao</span></code> API Reference", "torchao.kernel", "torchao.quantization", "torchao.sparsity", "Dtypes", "UInt4Tensor", "from_float6_e3m2", "to_float6_e3m2", "to_nf4", "Int4WeightOnlyGPTQQuantizer", "Int4WeightOnlyQuantizer", "SmoothFakeDynQuantMixin", "SmoothFakeDynamicallyQuantizedLinear", "apply_dynamic_quant", "apply_weight_only_int8_quant", "change_linear_weights_to_int4_woqtensors", "change_linear_weights_to_int8_dqtensors", "change_linear_weights_to_int8_woqtensors", "smooth_fq_linear_to_inference", "swap_linear_with_smooth_fq_linear", "PerChannelNormObserver", "WandaSparsifier", "apply_fake_sparsity", "apply_sparse_semi_structured", "Getting Started", "Welcome to the torchao Documentation", "Overview", "Performant Kernels", "Quantization", "Computation times", "Sparsity", "&lt;no title&gt;", "Computation times", "Template Tutorial"], "terms": {"thi": [1, 6, 8, 13, 21, 22, 23, 34], "section": 1, "introduc": 1, "dive": 1, "detail": 1, "how": 1, "integr": 1, "pytorch": [1, 26, 34], "optim": 1, "your": [1, 26], "machin": 1, "learn": [1, 34], "model": [1, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 26], "sparsiti": [1, 21, 22, 23, 24, 26], "quantiz": [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 26], "dtype": [1, 6, 7, 8, 9, 26], "kernel": [1, 16], "tba": [2, 5, 25, 27, 28, 29, 31], "class": [6, 10, 11, 12, 13, 21, 22], "torchao": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "elem": 6, "kwarg": [6, 12, 13, 17, 18, 21, 22, 24], "sourc": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 32, 34], "tolist": 6, "list": [6, 20, 22], "number": [6, 8, 22], "return": [6, 7, 8, 19, 20], "tensor": [6, 7, 8, 9, 14, 16, 17, 18, 22, 34], "nest": 6, "For": 6, "scalar": 6, "standard": 6, "python": [6, 32, 34], "just": 6, "like": 6, "item": [6, 34], "ar": [6, 8, 16, 22], "automat": [6, 34], "move": 6, "cpu": 6, "first": [6, 22], "necessari": 6, "oper": 6, "differenti": 6, "exampl": [6, 22, 30, 32, 33, 34], "torch": [6, 7, 8, 13, 19, 20, 23, 34], "randn": 6, "2": [6, 8, 16, 23, 34], "0": [6, 12, 13, 20, 22, 30, 33, 34], "012766935862600803": 6, "5415473580360413": 6, "08909505605697632": 6, "7729271650314331": 6, "no_bit_pack": [7, 8], "bool": [7, 8, 11, 19], "fals": [7, 8, 19, 22], "float32": 7, "convert": [7, 8, 13, 14, 16, 17, 18], "an": [7, 22, 26], "fp6": [7, 8], "creat": 7, "to_float6_e3m2": 7, "fp32": 7, "paramet": [7, 8, 16, 19, 20, 22], "store": [7, 8, 21], "uint8": [7, 8], "data": [7, 8], "If": [7, 8, 19, 22], "last": [7, 8], "dimens": [7, 8], "must": [7, 8], "divis": [7, 8], "3": [7, 8, 34], "whether": [7, 8], "input": [7, 8, 22], "doe": [7, 8], "have": [7, 8, 22], "bit": [7, 8], "pack": [7, 8], "output": [7, 8, 34], "4": [7, 8, 16, 23], "type": [7, 8, 10, 11], "particular": 8, "format": 8, "ha": 8, "expon": 8, "mantissa": 8, "By": 8, "default": [8, 19, 20], "perform": [8, 12, 13, 19, 21], "everi": [8, 13, 21], "valu": [8, 12, 13, 19, 22], "x": [8, 13, 34], "6": 8, "8": [8, 10, 11, 16], "The": [8, 19, 20, 22], "unless": 8, "set": [8, 12, 13, 19, 22], "true": [8, 10, 11, 19], "can": 8, "us": [8, 15, 22, 23, 26], "observ": [8, 21], "pattern": 8, "debug": [8, 19], "repres": [8, 22], "inf": 8, "nan": 8, "thu": 8, "make": 8, "sure": 8, "magnitud": [8, 22], "30": 8, "largest": 8, "28": 8, "all": [8, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 30, 32], "round": 8, "down": 8, "while": [8, 13, 16, 17, 18, 21, 22], "overflow": 8, "see": 8, "also": 8, "from_float6_e3m2": 8, "block_siz": 9, "int": [9, 11, 22], "64": [9, 16], "scaler_block_s": 9, "256": [9, 11, 16], "blocksiz": 10, "percdamp": 10, "groupsiz": [10, 11, 16], "inner_k_til": [10, 11, 16], "padding_allow": [10, 11], "devic": [10, 11], "cuda": [10, 11], "option": [11, 19, 20, 22], "arg": [12, 13, 22], "set_debug_x_absmax": [12, 13], "self": [12, 13], "x_running_abs_max": [12, 13], "which": [12, 13], "lead": [12, 13], "smooth": [12, 13], "scale": [12, 13, 19, 20], "ones": [12, 13, 22], "alpha": [12, 13, 20], "5": [12, 13, 20, 22, 34], "enabl": [12, 13], "benchmark": [12, 13, 19], "without": [12, 13], "calibr": [12, 13], "replac": [13, 20], "nn": [13, 19, 20], "linear": [13, 14, 15, 16, 17, 18, 20, 23], "implement": 13, "dynam": [13, 14], "per": [13, 14, 15, 22], "token": [13, 14], "activ": [13, 14, 19, 22], "channel": [13, 14, 15, 21], "weight": [13, 14, 15, 16, 17, 18, 22], "base": [13, 22], "smoothquant": [13, 19, 20], "forward": [13, 21], "defin": [13, 21, 22], "comput": [13, 21, 22], "call": [13, 21], "should": [13, 21, 22], "overridden": [13, 21], "subclass": [13, 14, 16, 17, 18, 21], "although": [13, 21], "recip": [13, 21], "pass": [13, 21], "need": [13, 21, 22], "within": [13, 21], "function": [13, 21, 22, 23, 26], "one": [13, 21], "modul": [13, 15, 16, 17, 18, 19, 20, 21, 22], "instanc": [13, 21], "afterward": [13, 21], "instead": [13, 21], "sinc": [13, 21], "former": [13, 21], "take": [13, 21], "care": [13, 21], "run": [13, 19, 21, 34], "regist": [13, 21], "hook": [13, 21], "latter": [13, 21], "silent": [13, 21], "ignor": [13, 21], "them": [13, 21], "classmethod": 13, "from_float": 13, "mod": 13, "fake": 13, "version": 13, "note": [13, 22], "requir": 13, "to_infer": 13, "calcul": [13, 19], "prepar": [13, 19, 22], "infer": [13, 19], "filter_fn": [14, 15, 16, 17, 18], "none": [14, 15, 16, 17, 18, 19, 20, 22], "appli": [14, 15, 16, 17, 18], "symmetr": [14, 15], "layer": [14, 15, 19, 20, 22, 23], "int8dynamicallyquantizedlinearweight": [14, 17], "onli": 15, "int8": 15, "given": 15, "swap": 15, "128": 16, "int4weightonlyquantizedlinearweight": 16, "effect": [16, 17, 18], "same": [16, 17, 18], "form": [16, 17, 18], "apply_dynamic_qu": [16, 17], "modifi": [16, 17, 18, 22], "control": [16, 22], "granular": 16, "smaller": 16, "size": 16, "more": [16, 26], "fine": 16, "grain": 16, "choic": 16, "32": 16, "int4": 16, "mm": 16, "int8weightonlyquantizedlinearweight": 18, "apply_weight_only_int8_qu": 18, "debug_skip_calibr": 19, "each": [19, 21], "smoothfakedynamicallyquantizedlinear": [19, 20], "contain": [19, 20], "maximum": 19, "skip_fqn_list": 20, "cur_fqn": 20, "equival": 20, "str": [20, 22], "fulli": 20, "qualifi": 20, "name": [20, 22], "skip": [20, 22], "dure": 20, "current": [20, 22], "being": 20, "process": [20, 34], "float": [20, 22], "factor": 20, "A": 21, "custom": 21, "l2": 21, "norm": [21, 22], "buffer": 21, "x_orig": 21, "sparsity_level": 22, "semi_structured_block_s": 22, "wanda": 22, "sparsifi": 22, "prune": [22, 23, 26], "propos": 22, "http": 22, "arxiv": 22, "org": 22, "ab": 22, "2306": 22, "11695": 22, "awar": 22, "method": 22, "remov": 22, "product": 22, "three": 22, "variabl": 22, "1": [22, 30, 33, 34], "spars": 22, "block": 22, "zero": 22, "out": 22, "target": 22, "level": 22, "config": 22, "dict": 22, "ad": 22, "parametr": 22, "inplac": 22, "you": [22, 34], "preserv": 22, "origin": 22, "copi": 22, "deepcopi": 22, "squash_mask": 22, "params_to_keep": 22, "tupl": 22, "params_to_keep_per_lay": 22, "squash": 22, "mask": 22, "appropri": 22, "either": 22, "sparse_param": 22, "attach": 22, "kei": [22, 34], "save": 22, "specifi": 22, "param": 22, "specif": 22, "fqn": 22, "string": 22, "xdoctest": 22, "local": 22, "undefin": 22, "don": 22, "t": 22, "ani": 22, "hasattr": 22, "submodule1": 22, "keep": 22, "linear1": 22, "foo": 22, "bar": 22, "submodule2": 22, "linear42": 22, "baz": 22, "print": [22, 34], "42": 22, "24": 22, "some": 22, "other": [22, 34], "update_mask": 22, "tensor_nam": 22, "statist": 22, "retriev": 22, "act_per_input": 22, "Then": 22, "metric": 22, "matrix": 22, "compar": 22, "across": 22, "whole": 22, "simul": 23, "It": 23, "ao": 23, "flow": 23, "open": 26, "librari": 26, "provid": 26, "nativ": 26, "our": 26, "under": 26, "develop": 26, "content": 26, "come": 26, "soon": 26, "00": [30, 33], "003": [30, 33, 34], "total": [30, 33, 34], "execut": [30, 33], "file": [30, 33], "from": [30, 33, 34], "galleri": [30, 32, 34], "mem": [30, 33], "mb": [30, 33], "templat": [30, 32, 33], "tutori": [30, 32, 33], "tutorials_sourc": 30, "template_tutori": [30, 33, 34], "py": [30, 33, 34], "download": [32, 34], "code": [32, 34], "tutorials_python": 32, "zip": 32, "jupyt": [32, 34], "notebook": [32, 34], "tutorials_jupyt": 32, "gener": [32, 34], "sphinx": [32, 34], "go": 34, "end": 34, "full": 34, "author": 34, "firstnam": 34, "lastnam": 34, "what": 34, "prerequisit": 34, "v2": 34, "gpu": 34, "describ": 34, "why": 34, "topic": 34, "import": 34, "add": 34, "link": 34, "relev": 34, "research": 34, "paper": 34, "walk": 34, "through": 34, "below": 34, "rand": 34, "4711": 34, "5748": 34, "4795": 34, "8113": 34, "4765": 34, "2122": 34, "5516": 34, "2789": 34, "6816": 34, "8263": 34, "2734": 34, "9298": 34, "7648": 34, "6830": 34, "3574": 34, "practic": 34, "user": 34, "test": 34, "knowledg": 34, "nlp": 34, "scratch": 34, "summar": 34, "concept": 34, "cover": 34, "highlight": 34, "takeawai": 34, "link1": 34, "link2": 34, "time": 34, "script": 34, "minut": 34, "second": 34, "ipynb": 34}, "objects": {"torchao.dtypes": [[6, 0, 1, "", "UInt4Tensor"], [7, 2, 1, "", "from_float6_e3m2"], [8, 2, 1, "", "to_float6_e3m2"], [9, 2, 1, "", "to_nf4"]], "torchao.dtypes.UInt4Tensor": [[6, 1, 1, "", "tolist"]], "torchao.quantization": [[10, 0, 1, "", "Int4WeightOnlyGPTQQuantizer"], [11, 0, 1, "", "Int4WeightOnlyQuantizer"], [12, 0, 1, "", "SmoothFakeDynQuantMixin"], [13, 0, 1, "", "SmoothFakeDynamicallyQuantizedLinear"], [14, 2, 1, "", "apply_dynamic_quant"], [15, 2, 1, "", "apply_weight_only_int8_quant"], [16, 2, 1, "", "change_linear_weights_to_int4_woqtensors"], [17, 2, 1, "", "change_linear_weights_to_int8_dqtensors"], [18, 2, 1, "", "change_linear_weights_to_int8_woqtensors"], [19, 2, 1, "", "smooth_fq_linear_to_inference"], [20, 2, 1, "", "swap_linear_with_smooth_fq_linear"]], "torchao.quantization.SmoothFakeDynQuantMixin": [[12, 1, 1, "", "set_debug_x_absmax"]], "torchao.quantization.SmoothFakeDynamicallyQuantizedLinear": [[13, 1, 1, "", "forward"], [13, 1, 1, "", "from_float"], [13, 1, 1, "", "set_debug_x_absmax"], [13, 1, 1, "", "to_inference"]], "torchao": [[4, 3, 0, "-", "sparsity"]], "torchao.sparsity": [[21, 0, 1, "", "PerChannelNormObserver"], [22, 0, 1, "", "WandaSparsifier"], [23, 2, 1, "", "apply_fake_sparsity"], [24, 2, 1, "", "apply_sparse_semi_structured"]], "torchao.sparsity.PerChannelNormObserver": [[21, 1, 1, "", "forward"]], "torchao.sparsity.WandaSparsifier": [[22, 1, 1, "", "prepare"], [22, 1, 1, "", "squash_mask"], [22, 1, 1, "", "update_mask"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:function", "3": "py:module"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "function", "Python function"], "3": ["py", "module", "Python module"]}, "titleterms": {"torchao": [0, 1, 2, 3, 4, 26], "dtype": [0, 5], "api": [1, 26], "refer": [1, 26], "python": 1, "kernel": [2, 28], "quantiz": [3, 29], "sparsiti": [4, 31], "uint4tensor": 6, "from_float6_e3m2": 7, "to_float6_e3m2": 8, "to_nf4": 9, "int4weightonlygptqquant": 10, "int4weightonlyquant": 11, "smoothfakedynquantmixin": 12, "smoothfakedynamicallyquantizedlinear": 13, "apply_dynamic_qu": 14, "apply_weight_only_int8_qu": 15, "change_linear_weights_to_int4_woqtensor": 16, "change_linear_weights_to_int8_dqtensor": 17, "change_linear_weights_to_int8_woqtensor": 18, "smooth_fq_linear_to_infer": 19, "swap_linear_with_smooth_fq_linear": 20, "perchannelnormobserv": 21, "wandasparsifi": 22, "apply_fake_spars": 23, "apply_sparse_semi_structur": 24, "get": 25, "start": 25, "welcom": 26, "document": 26, "overview": [27, 34], "perform": 28, "comput": [30, 33], "time": [30, 33], "templat": 34, "tutori": 34, "step": 34, "option": 34, "addit": 34, "exercis": 34, "conclus": 34, "further": 34, "read": 34}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})